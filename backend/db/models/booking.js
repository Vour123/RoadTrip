'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Booking.associate = function(models) {
    Booking.hasOne(models.Car, {foreignKey:"carId"});
    Booking.belongsTo(models.User, {foreignKey:"userId"});
    };
  return Booking;
};