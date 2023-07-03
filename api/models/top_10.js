"use strict";
module.exports = (sequelize, DataTypes) => {
  const TOP_10 = sequelize.define(
    "TOP_10",
    {
      BRICK: DataTypes.INTEGER,
      SETOR_NEC_ABERTO: DataTypes.STRING,
      EAN: DataTypes.STRING,
      CEP_INICIAL: DataTypes.INTEGER,
      CEP_FINAL: DataTypes.INTEGER,
      PRODUTO: DataTypes.STRING,
      LABORATORIO: DataTypes.STRING,
      UNIDADES: DataTypes.FLOAT,
      FCC: DataTypes.INTEGER,
      RANK: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
    }
  );
  TOP_10.associate = function (models) {
    // associations can be defined here
  };
  return TOP_10;
};
