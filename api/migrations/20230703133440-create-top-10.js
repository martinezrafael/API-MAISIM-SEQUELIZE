"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("TOP_10", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      BRICK: {
        type: Sequelize.INTEGER,
      },
      SETOR_NEC_ABERTO: {
        type: Sequelize.STRING,
      },
      EAN: {
        type: Sequelize.STRING,
      },
      CEP_INICIAL: {
        type: Sequelize.INTEGER,
      },
      CEP_FINAL: {
        type: Sequelize.INTEGER,
      },
      PRODUTO: {
        type: Sequelize.STRING,
      },
      LABORATORIO: {
        type: Sequelize.STRING,
      },
      UNIDADES: {
        type: Sequelize.FLOAT,
      },
      FCC: {
        type: Sequelize.INTEGER,
      },
      RANK: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("TOP_10");
  },
};
