"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

		return queryInterface.bulkInsert(
			"Peripherals",
			[
				{
					name: "deathadder",
					brand: "razer",
					type: "mouse",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "g403",
					brand: "logitech",
					type: "mouse",
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					name: "one",
					brand: "ducky",
					type: "keyboard",
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					name: "black widow chroma",
					brand: "razer",
					type: "keyboard",
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

		return queryInterface.bulkDelete("Peripherals", null, {});
	}
};
