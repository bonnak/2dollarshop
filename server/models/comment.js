const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      models.Comment.belongsTo(models.Post, { as: 'post' });
      models.Comment.belongsTo(models.User, { as: 'user' });
    }
  }

  Comment.init({
    userId: DataTypes.UUID,
    postId: DataTypes.BIGINT,
    body: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Comment',
    paranoid: true,
  });

  return Comment;
};
