var express = require("express");
var createCardRouter = express.Router();

createCardRouter.post("/", (req, res, next) => {
  const card = require("../schemas/cardSchema");
  card
    .create({
      imgSrc: req.body.imgSrc,
      cardPower: req.body.cardPower,
    })
    .then((result) => {
      res.send(result);
    });
});

module.exports = createCardRouter;
