const { Guest } = require('../models');

const createGuest = async (data) => {
    const guest = await Guest.create(data);
    return guest;
};

const getGuest = async (id) => {
    const guest = await Guest.findByPk(id);
    if (!guest) {
        throw new Error('Huespede no encontrado!');
    }
    return guest;
};

const getAllGuests = async () => {
    const guests = await Guest.findAll();
    return guests;
};

const updateGuest = async (id, data) => {
    const guest = await Guest.findByPk(id);
    if (!guest) {
        throw new Error('Huespede no encontrado!');
    }
    await guest.update(data);
    return guest;
};

const deleteGuest = async (id) => {
    const guest = await Guest.findByPk(id);
    if (!guest) {
        throw new Error('Huespede no encontrado!');
    }
    await guest.destroy();
    return guest;
};

module.exports = {
    createGuest,
    getGuest,
    getAllGuests,
    updateGuest,
    deleteGuest,
};
