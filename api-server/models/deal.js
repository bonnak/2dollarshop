const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Deal extends Model {
    static associate(models) {
      models.Deal.hasMany(models.Comment, { as: 'comments' });
      models.Deal.belongsTo(models.User, { as: 'user' });
    }
  }

  Deal.init({
    userId: DataTypes.UUID,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    tags: DataTypes.JSON,
    externalLink: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
  });

  return Deal;
};
