const roomService = require('../services/room.service');

const createRoom = async (req, res) => {
    try {
        const room = await roomService.createRoom(req.body);
        res.status(201).json(room);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRoom = async (req, res) => {
    try {
        const room = await roomService.getRoom(req.params.id);
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllRooms = async (req, res) => {
    try {
        const rooms = await roomService.getAllRooms();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateRoom = async (req, res) => {
    try {
        const room = await roomService.updateRoom(req.params.id, req.body);
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteRoom = async (req, res) => {
    try {
        await roomService.deleteRoom(req.params.id);
        res.status(200).json({ message: 'Habitacion, Eliminada con exito!' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getRoomsByHotel = async (req, res) => {
    try {
      const rooms = await roomService.getRoomsByHotel(req.params.hotel_id);
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    createRoom,
    getRoom,
    getAllRooms,
    updateRoom,
    deleteRoom,
    getRoomsByHotel
};
