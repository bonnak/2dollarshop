const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {}

  Category.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    displayed: DataTypes.BOOLEAN,
    parentId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Category',
    paranoid: true,
  });

  return Category;
};
