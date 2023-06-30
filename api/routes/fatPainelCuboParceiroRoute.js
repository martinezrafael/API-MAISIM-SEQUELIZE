const { Router } = require("express");
const FatPainelCuboParceiroController = require("../controllers/FatPainelCuboParceiroController");

const router = Router();

router.get("/cubos", FatPainelCuboParceiroController.getAllCubos);
router.get("/cubos/:id", FatPainelCuboParceiroController.getUniqueCubo);

module.exports = router;
