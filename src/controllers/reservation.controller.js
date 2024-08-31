const reservationService = require('../services/reservation.service');

const createReservation = async (req, res) => {
    try {
        const reservation = await reservationService.createReservation(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateReservation = async (req, res) => {
    try {
        const reservation = await reservationService.updateReservation(req.params.id, req.body);
        res.status(200).json(reservation);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const cancelReservation = async (req, res) => {
    try {
        const reservation = await reservationService.cancelReservation(req.params.id);
        res.status(200).json(reservation);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getReservations = async (req, res) => {
    try {
        const reservations = await reservationService.getReservations(req.query);
        res.status(200).json(reservations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createReservation,
    updateReservation,
    cancelReservation,
    getReservations,
};