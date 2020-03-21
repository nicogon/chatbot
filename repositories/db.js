
const Sequelize = require('sequelize');
// Sequelize configuration
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/config.json`)[env];
const db = new Sequelize(config.database, config.username, config.password, config);
module.exports = db;
