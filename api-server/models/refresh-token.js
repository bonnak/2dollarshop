const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    revoke() {
      return this.update({ revoked: true });
    }

    get revoked() {
      return !!this.getDataValue('revoked');
    }
  }

  RefreshToken.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: DataTypes.UUID,
      token: DataTypes.STRING,
      revoked: DataTypes.BOOLEAN,
      expiredAt: DataTypes.DATE,
    },
    {
      sequelize,
    },
  );

  return RefreshToken;
};
