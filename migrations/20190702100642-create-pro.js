'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      born: {
        type: Sequelize.DATE
      },
      team: {
        type: Sequelize.STRING
      },
      dpi: {
        type: Sequelize.INTEGER
      },
      edpi: {
        type: Sequelize.INTEGER
      },
      sensitivity: {
        type: Sequelize.INTEGER
      },
      hz: {
        type: Sequelize.INTEGER
      },
      zoom_sens: {
        type: Sequelize.INTEGER
      },
      mouse_accel: {
        type: Sequelize.INTEGER
      },
      raw_input: {
        type: Sequelize.INTEGER
      },
      crosshair: {
        type: Sequelize.STRING
      },
      view_model: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pros');
  }
};