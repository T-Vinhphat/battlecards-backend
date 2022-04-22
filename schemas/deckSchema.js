const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema({
  name: String,
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "card" }],
});

const deck = mongoose.model("deck", deckSchema);

module.exports = deck;
