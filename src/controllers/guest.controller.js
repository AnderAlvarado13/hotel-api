const guestService = require('../services/guest.service');

const createGuest = async (req, res) => {
    try {
        const guest = await guestService.createGuest(req.body);
        res.status(201).json(guest);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getGuest = async (req, res) => {
    try {
        const guest = await guestService.getGuest(req.params.id);
        res.status(200).json(guest);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllGuests = async (req, res) => {
    try {
        const guests = await guestService.getAllGuests();
        res.status(200).json(guests);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateGuest = async (req, res) => {
    try {
        const guest = await guestService.updateGuest(req.params.id, req.body);
        res.status(200).json(guest);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteGuest = async (req, res) => {
    try {
        const guest = await guestService.deleteGuest(req.params.id);
        res.status(200).json({ message: 'Huespede, Eliminado con exito!' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createGuest,
    getGuest,
    getAllGuests,
    updateGuest,
    deleteGuest,
};
