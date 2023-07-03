const bodyParser = require("body-parser");
const fatPainelCuboParceiroRoute = require("./fatPainelCuboParceiroRoute");
const top10Route = require("./top10Route");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(fatPainelCuboParceiroRoute);
  app.use(top10Route);
};
