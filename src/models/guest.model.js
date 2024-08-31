const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');


const Guest = sequelize.define('Guest', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
});

module.exports = Guest;