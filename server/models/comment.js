const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      models.Comment.belongsTo(models.Deal, { as: 'deal' });
      models.Comment.belongsTo(models.User, { as: 'user' });
    }
  }

  Comment.init({
    userId: DataTypes.UUID,
    dealId: DataTypes.BIGINT,
    body: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Comment',
    paranoid: true,
  });

  return Comment;
};
