const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Drivers extends Model {}
Drivers.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  yearOfBirth: Sequelize.STRING,
  idCard: Sequelize.INTEGER,
  driveLicense: Sequelize.INTEGER,
  car: Sequelize.STRING,
  location: Sequelize.STRING,
  km: Sequelize.INTEGER,
  rate: Sequelize.INTEGER,
  late: Sequelize.REAL,
  longi: Sequelize.REAL
}, { sequelize, modelName: 'drivers' });

module.exports = Drivers;
