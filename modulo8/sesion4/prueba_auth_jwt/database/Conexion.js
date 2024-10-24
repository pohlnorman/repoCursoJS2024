import Sequelize from "sequelize";

//Aqui realizamos la conexion a la base de datos mediante el modulo de sequelize
export const sequelize = new Sequelize('jugadores_futbol','postgres','admin',{
    host:'localhost',
    dialect:'postgres',
    logging:true //disable logging; default: console.log
});