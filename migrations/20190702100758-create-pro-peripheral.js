'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProPeripherals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pros',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      PeripheralId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Peripherals',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    return queryInterface.dropTable('ProPeripherals');
  }
};