const jwt = require('jsonwebtoken');
const { Model } = require('sequelize');
const { config } = require('@bonnak/toolset');

module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    revoke() {
      return this.update({ revoked: true });
    }

    get revoked() {
      return !!this.getDataValue('revoked');
    }

    static async validate(token) {
      const refreshToken = await RefreshToken.findOne({
        where: {
          token,
          revoked: false,
        },
      });

      jwt.verify(refreshToken.token, config.get('auth.jwt.secret'));
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
