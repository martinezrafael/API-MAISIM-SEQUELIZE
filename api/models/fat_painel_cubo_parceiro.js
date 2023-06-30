"use strict";
module.exports = (sequelize, DataTypes) => {
  const FAT_PAINEL_CUBO_PARCEIRO = sequelize.define(
    "FAT_PAINEL_CUBO_PARCEIRO",
    {
      PDV_ID: DataTypes.INTEGER,
      FCC: DataTypes.INTEGER,
      MES_ID: DataTypes.INTEGER,
      BRICK: DataTypes.INTEGER,
      UNIDADE: DataTypes.INTEGER,
      REAL_VALOR: DataTypes.FLOAT,
      CONSUMIDOR: DataTypes.FLOAT,
    },
    {
      freezeTableName: true,
    }
  );
  FAT_PAINEL_CUBO_PARCEIRO.associate = function (models) {
    // associations can be defined here
  };
  return FAT_PAINEL_CUBO_PARCEIRO;
};
