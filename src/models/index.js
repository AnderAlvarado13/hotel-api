const sequelize = require('../config/db.config');
const User = require('./user.model');
const Guest = require('./guest.model');
const Room = require('./room.model');
const Hotel = require('./hotel.model');
const Reservation = require('./reservation.model');

// Definir asociaciones
Hotel.hasMany(Room, { foreignKey: 'hotel_id' });
Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });

Guest.hasMany(Reservation, { foreignKey: 'guest_id' });
Reservation.belongsTo(Guest, { foreignKey: 'guest_id' });

Room.hasMany(Reservation, { foreignKey: 'room_id' });
Reservation.belongsTo(Room, { foreignKey: 'room_id' });

module.exports = {
  sequelize,
  User,
  Guest,
  Room,
  Hotel,
};
