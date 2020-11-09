const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index');

class Cars extends Model {}
Cars.init({
type : Sequelize.STRING,
image: Sequelize.STRING,
price: Sequelize.STRING,
description : Sequelize.STRING
}, { sequelize, modelName: 'cars' });


module.exports = Cars ;

