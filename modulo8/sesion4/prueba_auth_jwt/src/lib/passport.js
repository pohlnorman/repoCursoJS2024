import passport from "passport";
import  LocalStrategy  from "passport-local";
import bcrypt from 'bcryptjs';
import {User} from '../models/users.model.js';

// Estrategia local para autenticación
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ where: { username }, include: [Role] });
        if (!user) {
            return done(null, false, { message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Contraseña incorrecta' });
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// Serialización del usuario para sesiones (si se usa express-session)
passport.serializeUser((user, done) => {
    done(null, user.idUser);
});

// Deserializar usuario desde la sesión
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id, { include: [Role] });
        done(null, user);
    } catch (err) {
        done(err);
    }
});

export default passport

