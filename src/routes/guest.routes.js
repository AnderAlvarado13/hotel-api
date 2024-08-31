const express = require('express');
const guestController = require('../controllers/guest.controller');
const router = express.Router();

// Crear nuevo huespede
router.post('/guests', guestController.createGuest);

// Obtener un huespede por ID
router.get('/guests/:id', guestController.getGuest);

// Obtener todos los huespedes
router.get('/guests', guestController.getAllGuests);

// Actualizar un huespede por ID
router.put('/guests/:id', guestController.updateGuest);

// Eliminar un huespede por ID
router.delete('/guests/:id', guestController.deleteGuest);

module.exports = router;
