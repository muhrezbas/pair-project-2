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
			"Pros",
			[
				{
					name: "dev1ce",
					born: new Date("September 8, 1995"),
          team: "Astralis",
          dpi: 400,
					edpi: 800,
          sensitivity: 2.00,
          hz: 1000,
					zoom_sens: 1.10,
          mouse_accel: 0,
          raw_input: 1,
          role:'awper',
					crosshair: "cl_crosshairalpha 800; cl_crosshaircolor 2; cl_crosshairdot 0; cl_crosshairgap -2; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 0; cl_crosshair_drawoutline 0; cl_crosshair_sniper_width 1;",
					view_model: "viewmodel_fov 68; viewmodel_offset_x 2.5; viewmodel_offset_y 0; viewmodel_offset_z -2; viewmodel_presetpos 0; cl_viewmodel_shift_left_amt 0; cl_viewmodel_shift_right_amt 0; viewmodel_recoil 0; cl_righthand 1;",
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

		return queryInterface.bulkDelete("Pros", null, {});
	}
};
