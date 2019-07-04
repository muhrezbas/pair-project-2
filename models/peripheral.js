'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model
  class Peripheral extends Model {
    static associate(models) {
      Peripheral.belongsToMany(models.Pro, { through: models.ProPeripheral });
    }
  }
  Peripheral.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    type: DataTypes.STRING
  }, { sequelize })
  return Peripheral;
};