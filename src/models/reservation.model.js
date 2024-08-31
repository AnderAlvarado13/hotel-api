const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Reservation = sequelize.define('Reservation', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    guest_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Guests',
        key: 'id',
      },
    },
    room_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Rooms',
        key: 'id',
      },
    },
    check_in_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    check_out_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('confirmed', 'cancelled', 'completed'),
      allowNull: false,
    },
  });
  
  module.exports = Reservation;