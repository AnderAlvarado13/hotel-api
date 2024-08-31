const { Room } = require('../models');

const createRoom = async (data) => {
    const room = await Room.create(data);
    return room;
};

const getRoom = async (id) => {
    const room = await Room.findByPk(id);
    if (!room) {
        throw new Error('Habitación no encontrada!');
    }
    return room;
};

const getAllRooms = async () => {
    const rooms = await Room.findAll();
    return rooms;
};

const updateRoom = async (id, data) => {
    const room = await Room.findByPk(id);
    if (!room) {
        throw new Error('Habitación no encontrada!');
    }
    await room.update(data);
    return room;
};

const deleteRoom = async (id) => {
    const room = await Room.findByPk(id);
    if (!room) {
        throw new Error('Habitación no encontrada!');
    }
    await room.destroy();
    return room;
};

module.exports = {
    createRoom,
    getRoom,
    getAllRooms,
    updateRoom,
    deleteRoom,
};
