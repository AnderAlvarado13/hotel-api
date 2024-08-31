const { Reservation, Guest, Room } = require('../models');

const createReservation = async (data) => {
    const { guest_id, room_id, check_in_date, check_out_date, total_price, status } = data;

    // Verificamos que la habitación esté disponible
    const room = await Room.findByPk(room_id);
    if (!room || !room.is_available) {
        throw new Error('Habitación no disponible');
    }

    // Creamos la reservación
    const reservation = await Reservation.create({

        guest_id,
        room_id,
        check_in_date,
        check_out_date,
        total_price,
        status
    });

    // Actualizamos el estado de la habitación
    await Room.update({ is_available: false }, { where: { id: room_id } });

    return reservation;
};

const updateReservation = async (id, data) => {
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
        throw new Error('Reservacion no encontrada');
    }

    // Actualizamos los datos de la reservación
    await reservation.update(data);

    return reservation;
};

const cancelReservation = async (id) => {
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
        throw new Error('Reservacion no encontrada');
    }

    // Cancelamos la reservación y liberamos la habitación
    await reservation.update({ status: 'cancelled' });
    await Room.update({ is_available: true }, { where: { id: reservation.room_id } });

    return reservation;
};

const getReservations = async (filters) => {
    const { date, service, customer } = filters;

    const where = {};
    if (date) where.check_in_date = date;
    if (service) where.room_id = service;
    if (customer) where.guest_id = customer;

    const reservations = await Reservation.findAll({ where, include: [Guest, Room] });
    return reservations;
};

module.exports = {
    createReservation,
    updateReservation,
    cancelReservation,
    getReservations,
};