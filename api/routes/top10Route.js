const { Router } = require("express");
const Top10Controller = require("../controllers/Top10Controller");

const router = Router();

router.get("/top", Top10Controller.getAllTop10);
router.get("/top/:id", Top10Controller.getUniqueTop10);

module.exports = router;
