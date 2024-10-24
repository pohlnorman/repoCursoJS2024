import {DataTypes} from 'sequelize';
import { sequelize } from "../../database/Conexion.js";
import bcrypt from 'bcryptjs';

export const User = sequelize.define('usuarios',{
    idUser:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    }
});

// Antes de crear el usuario, se encripta la contraseña
User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});