module.exports = {
  up: (queryInterface, { DataTypes }) => queryInterface.createTable('Users', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    confirmed: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    confirmCode: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Users'),
};
