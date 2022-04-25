const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  pseudo: String,
  email: String,
  password: String,
  stat: {
    win: Number,
    lose: Number,
  },
  decks: [{ type: mongoose.Schema.Types.ObjectId, ref: "deck" }],
});

const user = mongoose.model("user", userSchema);

module.exports = user;
