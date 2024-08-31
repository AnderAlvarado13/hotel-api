const express = require('express');
const roomController = require('../controllers/room.controller');
const router = express.Router();

// Crear una nueva habitación
router.post('/rooms', roomController.createRoom);

// Obtener una habitación por ID
router.get('/rooms/:id', roomController.getRoom);

// Obtener todas las habitaciones
router.get('/rooms', roomController.getAllRooms);

// Actualizar una habitación por ID
router.put('/rooms/:id', roomController.updateRoom);

// Eliminar una habitación por ID
router.delete('/rooms/:id', roomController.deleteRoom);

module.exports = router;
