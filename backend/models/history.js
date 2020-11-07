const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class History extends Model {}
History.init({
  available: Sequelize.STRING,
  driver_id: Sequelize.INTEGER
}, { sequelize, modelName: 'history' });

module.exports = History;
