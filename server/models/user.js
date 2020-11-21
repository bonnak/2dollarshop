const { randomBytes } = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ms = require('ms');
const { Model } = require('sequelize');
const { config } = require('@bonnak/toolset');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.RefreshToken, { as: 'refreshTokens' });
    }

    static async register({ email, password, name }) {
      const user = await super.create({
        email,
        password,
        name,
        confirmed: false,
        confirmCode: this.generateConfirmCode(),
      });

      return user;
    }

    static async confirmRegister({ confirmCode }) {
      const user = await super.findOne({
        where: { confirmCode, confirmed: false },
      });

      if (user === null) {
        throw new Error('Invalid confirmation code');
      }

      return user.update({
        confirmed: true,
        confirmCode: null,
      });
    }

    validatePassword(password) {
      return bcrypt.compare(password, this.password());
    }

    async generateAccessToken() {
      const token = jwt.sign(
        {},
        config.get('auth.jwt.secret'),
        { expiresIn: '365d', subject: this.id },
      );

      await sequelize.models.AccessToken.create({
        userId: this.id,
        token,
      });

      const refreshToken = await sequelize.models.RefreshToken.create({
        userId: this.id,
        token: randomBytes(100).toString('hex'),
        expiredAt: ms('365d'),
      });

      return { accessToken: token, refreshToken: refreshToken.token };
    }

    static async attemptToAuthenticate({ email, password }) {
      const user = await User.findOne({
        where: {
          email,
          disabled: false,
          confirmed: true,
        },
      });

      if (user === null) {
        throw new Error('Invalid credentials');
      }

      const attemptPassed = await user.validatePassword(password);

      if (!attemptPassed) {
        throw new Error('Invalid credentials');
      }

      return user;
    }

    static generateConfirmCode() {
      const min = 10000;
      const max = 100000;

      return min + Math.floor((max - min) * Math.random());
    }

    async revokeAccessToken(token) {
      const accessToken = await sequelize.models.AccessToken.findOne({
        where: {
          token,
          userId: this.getDataValue('id'),
        },
      });

      return accessToken.revoke();
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        set(password) {
          this.setDataValue(
            'password',
            bcrypt.hashSync(password, parseInt(config.get('auth.jwt.salt'))),
          );
        },
        get() {
          return () => this.getDataValue('password');
        },
      },
      name: {
        type: DataTypes.STRING,
      },
      disabled: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      confirmed: DataTypes.BOOLEAN,
      confirmCode: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
    },
  );

  return User;
};
