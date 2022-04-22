var express = require("express");
var cardRouter = express.Router();
const CardModel = require("../schemas/cardSchema");
const DeckModel = require("../schemas/deckSchema");

cardRouter.post("/", (req, res, next) => {
  CardModel.create({
    imgSrc: req.body.imgSrc,
    cardPower: req.body.cardPower,
  }).then((result) => {
    res.send(result);
  });
});

cardRouter.get("/", (req, res, next) => {
  CardModel.find({}).then((result) => {
    res.send(result);
  });
});

module.exports = cardRouter;
