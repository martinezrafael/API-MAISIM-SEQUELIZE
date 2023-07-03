"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "top_10",
      [
        {
          BRICK: 2,
          SETOR_NEC_ABERTO: "REFERÊNCIA",
          EAN: "454642365487",
          CEP_INICIAL: 1045000,
          CEP_FINAL: 109999,
          PRODUTO: "PRODUTOA",
          LABORATORIO: "LABORATORIOA",
          UNIDADES: 100,
          FCC: 200,
          RANK: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BRICK: 2,
          SETOR_NEC_ABERTO: "REFERÊNCIA",
          EAN: "454642365487",
          CEP_INICIAL: 1045000,
          CEP_FINAL: 1145000,
          PRODUTO: "PRODUTOB",
          LABORATORIO: "LABORATORIOB",
          UNIDADES: 100,
          FCC: 200,
          RANK: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BRICK: 2,
          SETOR_NEC_ABERTO: "REFERÊNCIA",
          EAN: "454642365487",
          CEP_INICIAL: 1045000,
          CEP_FINAL: 1145000,
          PRODUTO: "PRODUTOC",
          LABORATORIO: "LABORATORIOC",
          UNIDADES: 100,
          FCC: 200,
          RANK: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("top_10", null, {});
  },
};
