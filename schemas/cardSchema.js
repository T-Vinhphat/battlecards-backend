const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  card: String,
  value: Number,
});

const card = mongoose.model("card", cardSchema);

module.exports = card;
