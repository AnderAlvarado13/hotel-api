const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');
const authMiddleware = require('../middleware/auth.middleware');

//  Verifica token 
router.use(authMiddleware.verifyToken);

// Crear una nueva reservación
router.post('/reservations', reservationController.createReservation);

// Modificar una reservación existente
router.put('/reservations/:id', reservationController.updateReservation);

// Cancelar una reservación
router.delete('/reservations/:id', reservationController.cancelReservation);

// Ver reservaciones (con filtros)
router.get('/reservations', reservationController.getReservations);

module.exports = router;