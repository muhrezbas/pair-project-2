"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        ProId: 'John Doe',
        isBetaMember: false
      }], {});
    */

		return queryInterface.bulkInsert(
			"ProPeripherals",
			[
				{
					ProId: 1,
					PeripheralId: 5,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					ProId: 1,
					PeripheralId: 7,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					ProId: 1,
					PeripheralId: 6,
					createdAt: new Date(),
					updatedAt: new Date()
        }
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

		return queryInterface.bulkDelete("ProPeripherals", null, {});
	}
};
