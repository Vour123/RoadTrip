'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User,{foreignKey: "userId"});
    Review.belongsTo(models.Car,{foreignKey: "carId"});
  };
  return Review;
};