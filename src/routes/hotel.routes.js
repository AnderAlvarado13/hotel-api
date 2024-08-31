const express = require('express');
const hotelController = require('../controllers/hotel.controller');
const router = express.Router();

// Crear nuevo hotel
router.post('/hotels', hotelController.createHotel);

// Obtener un hotel por ID
router.get('/hotels/:id', hotelController.getHotel);

// Obtener todos los hoteles
router.get('/hotels', hotelController.getAllHotels);

// Actualizar un hotel por ID
router.put('/hotels/:id', hotelController.updateHotel);

// Eliminar un hotel por ID
router.delete('/hotels/:id', hotelController.deleteHotel);

module.exports = router;
