import {DataTypes} from 'sequelize';
import { sequelize } from "../../database/Conexion.js";

export const player = sequelize.define('jugadores',{
    idPlayer:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    position:{
        type:DataTypes.STRING,
        allowNull: false
    },
    image:{
        type:DataTypes.STRING,
        allowNull: false
    }
});