const database = require("../models");

class Top10Controller {
  static async getAllTop10(req, res) {
    try {
      const AllTop10 = await database.TOP_10.findAll();
      return res.status(200).json(AllTop10);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getUniqueTop10(req, res) {
    const { id } = req.params;
    try {
      const uniqueTop10 = await database.TOP_10.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(uniqueTop10);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Top10Controller;
