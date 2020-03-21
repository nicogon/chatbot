
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Messages', {
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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Messages'),
};
