"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "fat_painel_cubo_parceiro",
      [
        {
          PDV_ID: 10,
          FCC: 100,
          MES_ID: 3,
          BRICK: 22,
          UNIDADE: 50,
          REAL_VALOR: 5.78,
          CONSUMIDOR: 8.76,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          PDV_ID: 105,
          FCC: 108,
          MES_ID: 4,
          BRICK: 256,
          UNIDADE: 56,
          REAL_VALOR: 5.88,
          CONSUMIDOR: 8.46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          PDV_ID: 15,
          FCC: 140,
          MES_ID: 34,
          BRICK: 12,
          UNIDADE: 60,
          REAL_VALOR: 5.89,
          CONSUMIDOR: 8.45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("fat_painel_cubo_parceiro", null, {});
  },
};
