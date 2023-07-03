// "use strict";
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable("FAT_PAINEL_CUBO_PARCEIRO", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       PDV_ID: {
//         type: Sequelize.INTEGER,
//       },
//       FCC: {
//         type: Sequelize.INTEGER,
//       },
//       MES_ID: {
//         type: Sequelize.INTEGER,
//       },
//       BRICK: {
//         type: Sequelize.INTEGER,
//       },
//       UNIDADE: {
//         type: Sequelize.INTEGER,
//       },
//       REAL_VALOR: {
//         type: Sequelize.FLOAT,
//       },
//       CONSUMIDOR: {
//         type: Sequelize.FLOAT,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable("FAT_PAINEL_CUBO_PARCEIRO");
//   },
// };
