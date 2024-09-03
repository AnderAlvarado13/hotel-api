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

const getRoomsByHotel = async (hotelId) => {
    try {
      const rooms = await Room.findAll({ where: { hotel_id: hotelId } });
      if (rooms.length === 0) {
        throw new Error('No se encontraron habitaciones para este hotel');
      }
      return rooms;
    } catch (error) {
      throw new Error('Error al obtener las habitaciones del hotel: ' + error.message);
    }
};

const getRoomsAvailable = async () => {
    try {
      const rooms = await Room.findAll({ where: { is_available: true } });
      if (rooms.length === 0) {
        throw new Error('No se encontraron habitaciones disponibles o no disponibles');
      }
      return rooms;
    } catch (error) {
      throw new Error('Error al obtener las habitaciones disponibles o no disponibles: ' + error.message);
    }
};

module.exports = {
    createRoom,
    getRoom,
    getAllRooms,
    updateRoom,
    deleteRoom,
    getRoomsByHotel,
    getRoomsAvailable
};
