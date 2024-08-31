const hotelService = require('../services/hotel.service');

const createHotel = async (req, res) => {
    try {
        const hotel = await hotelService.createHotel(req.body);
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getHotel = async (req, res) => {
    try {
        const hotel = await hotelService.getHotel(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllHotels = async (req, res) => {
    try {
        const hotels = await hotelService.getAllHotels();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateHotel = async (req, res) => {
    try {
        const hotel = await hotelService.updateHotel(req.params.id, req.body);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteHotel = async (req, res) => {
    try {
        await hotelService.deleteHotel(req.params.id);
        res.status(200).json({ message: 'Hotel, Eliminado con Exito' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createHotel,
    getHotel,
    getAllHotels,
    updateHotel,
    deleteHotel,
};
