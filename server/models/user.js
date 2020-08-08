const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Model } = require('sequelize');
const { config } = require('@bonnak/toolset');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static async register({ email, username, password } = {}) {
      const user = await this.create({
        username: email || username,
        email,
        password,
      });

      return user;
    }

    validatePassword(password) {
      return bcrypt.compare(password, this.password());
    }

    async generateAccessToken() {
      const accessToken = jwt.sign(
        { sub: this.id },
        config.get('auth.jwt.secret'),
        { expiresIn: '365d' },
      );

      return accessToken;
    }

    static async attemptToAuthenticate({ email, username, password } = {}) {
      const user = await User.findOne({
        where: {
          username: email || username,
          disabled: false,
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
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(password) {
          this.setDataValue(
            'password',
            bcrypt.hashSync(password, parseInt(process.env.JWT_SALT_ROUND)),
          );
        },
        get() {
          return () => this.getDataValue('password');
        },
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      fullName: {
        type: DataTypes.VIRTUAL(DataTypes.STRING, ['firstName', 'lastName']),
        set(value) {
          const names = value.split(' ');
          this.setDataValue(
            'firstName',
            _.capitalize(names.slice(0, 1).join(' ')),
          );
          this.setDataValue('lastName', _.capitalize(names.slice(1).join(' ')));
        },
        get() {
          const firstName = this.getDataValue('firstName') || '';
          const lastName = this.getDataValue('lastName') || '';
          const fullName = `${firstName} ${lastName}`.trim() || null;

          return fullName;
        },
      },
      disabled: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
    },
  );

  return User;
};
