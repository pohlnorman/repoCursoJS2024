import express from 'express';
import morgan from 'morgan';
import path,{ dirname } from 'path'
import { fileURLToPath } from 'url';
import exphbs from 'express-handlebars';
import session from 'express-session';
import SequelizeStore   from 'connect-session-sequelize';
import fileUpload from 'express-fileupload';

import {sequelize} from '../database/Conexion.js';
import indexRoutes from './routes/index.js';
import authRoutes from './routes/auth.js';
import helpers from './lib/handlebars.js';
import passport from './lib/passport.js';

import {User} from '../src/models/users.model.js';
import {Rol} from '../src/models/roles.model.js';
import {UsersRoles} from '../src/models/usersRoles.model.js';


//creamos el puerto de conexion
const PORT = 4000;

//creamos una variable para usar el modulo express
const app = express();

//creamos una variable para la ruta absoluta del proyecto
export const __dirname = dirname(fileURLToPath(import.meta.url))

//confugiracion handlebars (handlebars es un motor de plantillas)
app.set('views', path.join(__dirname, 'views')); //definimos la ruta a la carpeta views para handlebars
app.engine('.hbs',exphbs.engine({
    defaultLayout:'main', //nombre del layout principal,plantilla base
    layoutsDir: path.join(app.get('views'), 'layouts'), //ubicacion del layout principal
    partialsDir: path.join(app.get('views'), 'partials'), //ubicacion de los modulos comunes
    extname:'.hbs', //extension de las vistas
    helpers: helpers //auxiliar para funsiones handlebars
}));
app.set('view engine','.hbs');//aqui, le indicamos a nuestra aplicacion que usaremos handlebars

//------MIDDLEWARES-------
//middleware para registrar en consola solicitudes http y errores
app.use(morgan('dev'));
//Esta línea permite manejar datos enviados a través de formularios HTML
app.use(express.urlencoded({ extended: false }));
//Esta linea permite manejar la carga de archivos en las rutas
app.use(fileUpload());
//Esta línea permite manejar datos en formato JSON
app.use(express.json());

// Configurar el almacenamiento de sesiones usando Sequelize
const SequelizeSessionStore = SequelizeStore(session.Store);

// Crear el almacenamiento persistente en la base de datos
const sessionStore = new SequelizeSessionStore({
    db: sequelize,
});


app.use(session({
    secret: 'mi_secreto',       // Cambia esto por una clave secreta más segura
    resave: false,              // Evita volver a guardar la sesión si no se ha modificado
    saveUninitialized: false,   // No guarda sesiones vacías
}));

//Esta línea permite iniciar el modulo passport
app.use(passport.initialize());
//Esta linea permite guardar los datos capturados de passport en una sesion
app.use(passport.session());

//Esta linea permite modularizar y organizar las rutas de la aplicación.
app.use(indexRoutes);
app.use('/auth',authRoutes)



//Esta linea le indica a la aplicacion la ruta de los archivos estaticos(css,js,img).
app.use(express.static(path.join(__dirname, 'public')));







//Aqui iniciamos el servidor
async function main() {
    try {
        // Sincroniza todos los modelos con la base de datos
        await sequelize.sync({force:true});
        console.log("Tablas sincronizadas");

        // Crea roles predeterminados
    const roles = await Rol.bulkCreate([
        { name: 'Administrador' },
        { name: 'Moderador' },
        { name: 'Usuario' }
    ]);

    // Crea un superusuario con roles predeterminados
    const superusuario = await User.create({
        username: 'Superusuario',
        password: 'super'
    });

    // Asigna roles al superusuario
    await superusuario.addRoles(roles);
    console.log("Superusuario creado con roles predeterminados");
        
    app.listen(PORT, () => console.log(`-- Servidor corriendo en http://localhost:${PORT} --`));
        
    } catch (error) {
        console.error('error en la conexion a la base de datos:', error)
    }
}

main();