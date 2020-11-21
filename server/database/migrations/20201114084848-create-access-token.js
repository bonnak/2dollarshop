module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AccessTokens', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      revoked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AccessTokens');
  },
};
