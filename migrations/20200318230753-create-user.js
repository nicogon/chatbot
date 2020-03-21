
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
    },
    passwordHash: {
      type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
