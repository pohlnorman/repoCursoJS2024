import bcrypt from 'bcryptjs';
import {User} from '../models/users.model.js';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// Ruta de inicio de sesión
export const registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
        return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

      // Crear el nuevo usuario
        const newUser = await User.create({ username, password });
        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
}

export const loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });

        // Generar el token JWT si la autenticación es correcta
    const token = jwt.sign({ id: user.id, username: user.username }, 'mi_secreto_jwt', {
        expiresIn: '1h',
    });
        
    res.json({
        message: 'Autenticación exitosa',
        token,
    });
    })(req, res, next);
};

// Ruta para cerrar sesión (invalidar el token en el cliente)
export const logoutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
    res.json({ message: 'Sesión cerrada exitosamente' });
    });
};

export const sessionUser = (req, res) => {
    res.json({ message: 'Sesión activa', user: req.user });
};
