const Sequelize = require('sequelize');
const db = require('./db');
// Define messages
const messages = db.define('Messages', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.BIGINT,
  },
  type: {
    type: Sequelize.STRING,
  },
  sender: {
    type: Sequelize.BIGINT,
  },
  recipient: {
    type: Sequelize.BIGINT,
  },
  value: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  metadata: {
    allowNull: true,
    type: Sequelize.JSON,
  },
});

module.exports = messages;
