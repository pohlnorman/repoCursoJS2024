import express from 'express';
const router = express.Router();
import * as playerCtrl from '../controllers/player.controller.js';

// ruta home
router.get('/',playerCtrl.homeCtrl);

//------CREAR JUGADOR-----
//ruta hacia el formularo para capturar los datos del jugador
router.get('/jugadores/agregar',playerCtrl.jugadores); 
//ruta para guardar un jugador con los datos capturados desde el formulario
router.post('/jugadores/agregar',playerCtrl.createPlayer);

//-------VER LISTA DEE JUGADORES-----
//ruta para ver todos los jugadores
router.get('/jugadores',playerCtrl.findAllPlayers);


//-------EDITAR JUGADOR---------
//ruta hacia el formulario con los datos capturados por el id del jugador
router.get('/jugadores/editar/:id',playerCtrl.selectPlayerById);
//ruta para guardar los datos actualizados del jugador
router.post('/jugadores/:id',playerCtrl.updatePlayer);

//-------ELIMINAR JUGADOR--------
//ruta para eliminar un jugador por su id
router.delete('/jugadores/eliminar/:id',playerCtrl.deleteUserById);

export default router;
