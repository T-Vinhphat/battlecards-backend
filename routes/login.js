var express = require("express");
var loginRouter = express.Router();
const user = require("../schemas/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(400);

  const User = await user.findOne({ email });

  if (User === null) {
    res.status(400);
    return res.send("Compte inexistant");
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET);

  bcrypt.compare(password, User.password).then((matching) => {
    if (matching) res.send("Vous êtes connecté");
    else {
      res.status(400);
      res.send("Mot de passe incorrect, veuillez recommencer");
    }
  });
});

module.exports = loginRouter;
