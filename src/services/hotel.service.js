const { Hotel } = require('../models');

const createHotel = async (data) => {
    const hotel = await Hotel.create(data);
    return hotel;
};

const getHotel = async (id) => {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
        throw new Error('Hotel no encontrado!');
    }
    return hotel;
};

const getAllHotels = async () => {
    const hotels = await Hotel.findAll();
    return hotels;
};

const updateHotel = async (id, data) => {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
        throw new Error('Hotel no encontrado!');
    }
    await hotel.update(data);
    return hotel;
};

const deleteHotel = async (id) => {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
        throw new Error('Hotel no encontrado!');
    }
    await hotel.destroy();
    return hotel;
};

module.exports = {
    createHotel,
    getHotel,
    getAllHotels,
    updateHotel,
    deleteHotel,
};
