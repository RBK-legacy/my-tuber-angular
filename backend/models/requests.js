const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Requests extends Model {}
Requests.init({
  request: Sequelize.STRING,
  driver_id: Sequelize.INTEGER,
  x: Sequelize.INTEGER,
  y: Sequelize.INTEGER
}, { sequelize, modelName: 'requests' });

module.exports = Requests;


