'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    carId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Car, {foreignKey: "carId"});
  };
  return Image;
};