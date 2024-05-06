"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',
      [
        {
          nome: "Luiz1",
          email: "Luiz1@gmail.com",
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz2",
          email: "Luiz2@gmail.com",
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz3",
          email: "Luiz3@gmail.com",
          password_hash: await bcryptjs.hash('deleatdo', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});

  },

  async down() { }
};
