const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      models.Post.hasMany(models.Comment, { as: 'comments' });
      models.Post.belongsTo(models.User, { as: 'user' });
    }
  }

  Post.init({
    userId: DataTypes.UUID,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    tags: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Post',
    paranoid: true,
  });

  return Post;
};
