const bodyParser = require("body-parser");
const fatPainelCuboParceiroRoute = require("./fatPainelCuboParceiroRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(fatPainelCuboParceiroRoute);
};
