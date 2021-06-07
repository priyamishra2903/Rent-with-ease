const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('mysql://root@localhost:3306/renting_db', {logging: false});


module.exports = sequelize;