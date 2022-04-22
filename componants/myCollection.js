const userModel = require("../schemas/userSchema");
const cardModel = require("../schemas/cardSchema");
const deckModel = require("../schemas/deckSchema");

async function gatherDeck(req, res) {
  const pseudo = req.body.pseudo;

  const Deck = await userModel
    .findOne({ pseudo })
    .populate({ path: "deck", populate: { path: "cards" } });
  res.send(Deck);
}

async function addUser(req, res) {
  const user = new userModel({
    pseudo: req.body.pseudo,
    email: req.body.email,
    password: req.body.password,
    stat: {
      win: req.body.win,
      lose: req.body.lose,
    },
    deck: req.body.deck,
  });

  await user.save();

  const users = await userModel.find({});

  res.send(users);
}

async function addDeck(req, res) {
  const deck = new deckModel({
    name: req.body.name,
    cards: req.body.cards,
  });

  await deck.save();

  const decks = await deckModel.find({});

  res.send(decks);
}

async function addCard(req, res) {
  const card = new cardModel({
    imgSrc: req.body.imgSrc,
    cardPower: req.body.cardPower,
  });

  await card.save();

  const cards = await cardModel.find({});

  res.send(cards);
}

const myCollection = {
  gatherDeck,
  addDeck,
  addCard,
  addUser,
};

module.exports = myCollection;
