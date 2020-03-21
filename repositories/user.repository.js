const Sequelize = require('sequelize');
const db = require('./db');

const user = db.define('Users', {
  id: {
    primaryKey: true,
    type: Sequelize.BIGINT,
    autoIncrement: true,
  },
  username: { type: Sequelize.STRING, unique: true },
  passwordHash: Sequelize.STRING,
});

module.exports = user;
