import {player} from '../models/players.model.js';
import { __dirname } from '../index.js';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs'
import timestampFormat from '../public/js/timestapFormat.js';

//AQUI CREAMOS LOS CONTROLADORES PARA REALIZAR EL CRUD
//controlador para el home
export const homeCtrl = (req,res) => {
    res.render('index', {
        title: 'jugadores',
        activeIndex:'active'
    });
}

//--------CREATE--------
//GET controlador para renderizar el formulario e ingresar los datos
export const jugadores = async(req,res) => {
    res.render('agregarjugador',{
        activeCreate:'active'
    }) //aqui va el nombre del archivo de la vista.
};

//POST controlados para crear el jugador con los datos capturados desde el formulario
export const createPlayer = async(req,res) => {
    
    try {
        //------INICIO PORCION DE CODIGO PARA CARGAR IMAGEN--------
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).send('no se subio ningun archivo')
        }

        const file = req.files.file;

        //creamos nombre unico usando la funsion timestampFormat
        const extension = path.extname(file.name);
        const newName = timestampFormat(new Date)+extension;
        const uploadPath = path.join(__dirname, '/public/uploads/', newName);

        // Mover la imagen original a la carpeta de documentos de forma asíncrona
        await new Promise((resolve, reject) => {
            file.mv(uploadPath, (err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Imagen original subida con éxito: ' + newName);
                    resolve();
                }
            });
        });

        // Verifica si el archivo se guardó correctamente antes de usar Sharp
        if (!fs.existsSync(uploadPath)) {
            return res.status(500).send('Error: el archivo no se guardó correctamente');
        }

        // Crear las versiones redimensionadas de la imagen
        const img60pxPath = path.join(__dirname, '/public/uploads/imgResize', '60px_'+newName);
        const img200pxPath = path.join(__dirname, '/public/uploads/imgResize','200px_'+ newName);

        // Redimensionar la imagen a 60px
        await sharp(uploadPath)
            .resize(60, 60)
            .toFile(img60pxPath, (err, info) => {
                if (err) {
                    console.error("Error al crear imagen de 60px:", err);
                } else {
                    console.log("Imagen de 60px creada:", info);
                }
            });

        // Redimensionar la imagen a 200px
        await sharp(uploadPath)
            .resize(200, 200)
            .toFile(img200pxPath, (err, info) => {
                if (err) {
                    console.error("Error al crear imagen de 200px:", err);
                } else {
                    console.log("Imagen de 200px creada:", info);
                }
            });

        // Guardamos el nombre de la imagen de 60px para mostrarla en la tabla
        let image = '60px_' + newName;

        //------FIN PORCION DE CODIGO PARA CARGAR IMAGEN--------

        const {name, position} = req.body;
        
        const newPlayer = await player.create({
            name,
            position,
            image
        });
        res.redirect('/jugadores?success=true');
        //return res.status(200).json({ message: 'Jugador creado exitosamente' });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
//--------FIN CREATE--------


//--------VER TODOS--------
//controlador para mostrar todos los jugadores
export const findAllPlayers = async(req,res) => {
    try {
        const players = await player.findAll({attributes:{exclude:['createdAt','updatedAt']},raw : true});
        //res.json({jugadores:players})
        console.log(players)
        res.render('verjugadores',{
            players,
            activeAll:'active',
            swalMensaje: '/js/swalMensajes.js'
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
//--------FIN VER TODOS--------

//---------UPDATE--------
//controlador para renderizar el formulario con los datos del jugador por id
export const selectPlayerById = async(req,res) => {
    try {
        const {id} = req.params;
        const selectedPlayer = await player.findOne({
            where:{
                idPlayer: id
            },
            attributes:{exclude:['createdAt','updatedAt']},
            raw : true
        });
        console.log(selectedPlayer)
        res.render('editarjugador',{selectedPlayer})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

//controlador para realizar la actualizacion de datos
export const updatePlayer = async(req,res) => {
    try {
        const {id} = req.params;
        const {name, position} = req.body;
        const UpdateOnePlayer = await player.update({
            name,
            position
        },{
            where:{idPlayer: id} 
        });
        console.log(UpdateOnePlayer)
        res.redirect('/jugadores?update=true')
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
//------FIN UPDATE-----------

//controlador para eliminar un usuario por id
export const deleteUserById = async(req,res) => {
    try {
        const {id} = req.params;
        const deletePlayer = await player.destroy({
            where:{
                idPlayer: id
            }
        });
        if (deletePlayer) {
            return res.status(200).json({ message: 'Jugador eliminado exitosamente' });
        } else {
            return res.status(404).json({ message: 'Jugador no encontrado' });
        }
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
