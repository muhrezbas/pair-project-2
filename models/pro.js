'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Pro extends Model {
    static associate(models) {
      Pro.belongsToMany(models.Peripheral, { through: models.ProPeripheral });
    }
    tambah(value,att){
      
      return value + ' ' + att
    }
  }
  Pro.init({
    name: DataTypes.STRING,
    born: DataTypes.DATE,
    team: DataTypes.STRING,
    dpi: DataTypes.INTEGER,
    edpi: DataTypes.INTEGER,
    sensitivity: DataTypes.INTEGER,
    hz: DataTypes.INTEGER,
    zoom_sens: DataTypes.INTEGER,
    mouse_accel: DataTypes.INTEGER,
    raw_input: DataTypes.INTEGER,
    crosshair: DataTypes.STRING,
    view_model: DataTypes.STRING,
    role: DataTypes.STRING
  }, { sequelize });
  return Pro;
};

