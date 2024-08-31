const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Room = sequelize.define('Room', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  hotel_id: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Hotels',
      key: 'id',
    },
  },
  room_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price_per_night: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Room;