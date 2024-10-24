import {DataTypes} from 'sequelize';
import { sequelize } from "../../database/Conexion.js";
import { User } from './users.model.js';
import { Rol } from './roles.model.js';

export const UsersRoles = sequelize.define('usuariosRoles',{
    idUserRol:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
});

User.belongsToMany(Rol,{
    through: UsersRoles,
    foreignKey: 'userId'
});

Rol.belongsToMany(User,{
    through: UsersRoles,
    foreignKey: 'rolId'
});