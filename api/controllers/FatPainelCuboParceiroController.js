const database = require("../models");

class FatPainelCuboParceiroController {
  static async getAllCubos(req, res) {
    try {
      const allCubos = await database.FAT_PAINEL_CUBO_PARCEIRO.findAll();
      return res.status(200).json(allCubos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getUniqueCubo(req, res) {
    const { id } = req.params;
    try {
      const uniqueCubo = await database.FAT_PAINEL_CUBO_PARCEIRO.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(uniqueCubo);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = FatPainelCuboParceiroController;
