const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  imgSrc: String,
  cardPower: Number,
});

const card = mongoose.model("card", cardSchema);

module.exports = card;
