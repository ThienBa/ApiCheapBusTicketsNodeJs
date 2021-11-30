'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('stations', [
      {
        name: 'Bến Xe Miền Tây',
        address: '395 Kinh Dương Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh',
        province: 'TP.HCM',
        createdAt: '2021-11-27 04:11:07',
        updatedAt: '2021-11-27 04:11:07',
      },
      {
        name: 'Bến Xe Miền Đông',
        address: 'Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh',
        province: 'TP.HCM',
        createdAt: '2021-11-27 04:11:07',
        updatedAt: '2021-11-27 04:11:07',
      },
      {
        name: 'Bến Xe An Sương',
        address: 'QL22, Bà Điểm, Hóc Môn, Thành phố Hồ Chí Minh',
        province: 'TP.HCM',
        createdAt: '2021-11-27 04:11:07',
        updatedAt: '2021-11-27 04:11:07',
      },
      {
        name: 'Bến Xe Trung Tâm Đà Nẵng',
        address: 'Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng 550000',
        province: 'DN',
        createdAt: '2021-11-27 04:11:07',
        updatedAt: '2021-11-27 04:11:07',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  }
};
