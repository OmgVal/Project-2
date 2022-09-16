'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.gif.belongsToMany(models.user, {through: "likes"})
      models.gif.hasMany(models.comment)
    }
  }
  gif.init({
    title: DataTypes.STRING,
    giphyId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'gif',
  });
  return gif;
};