'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class ProPeripheral extends Model{
    static associate(models){
      ProPeripheral.belongsTo(models.Pro)
      ProPeripheral.belongsTo(models.Peripheral)
    }
  }
  ProPeripheral.init({
    ProId: DataTypes.INTEGER,
    PeripheralId: DataTypes.INTEGER
  }, { sequelize })
  return ProPeripheral;
};