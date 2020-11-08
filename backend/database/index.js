const Sequelize = require('sequelize');

const sequelize = new Sequelize('tuber', 'root', 'yasser131200', {
    host: 'localhost',
    dialect: 'mysql'


});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    sequelize.sync();

    module.exports = sequelize;
