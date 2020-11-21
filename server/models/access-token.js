const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AccessToken extends Model {
    revoke() {
      return this.update({ revoked: true });
    }

    get revoked() {
      return !!this.getDataValue('revoked');
    }

    static async validate(token) {
      const count = await super.count({
        where: {
          token,
          revoked: false,
        },
      });

      return !!count;
    }
  }

  AccessToken.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: DataTypes.UUID,
      token: DataTypes.STRING,
      revoked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
    },
  );

  return AccessToken;
};
