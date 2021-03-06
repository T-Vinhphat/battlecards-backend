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

  bcrypt.compare(password, User.password).then((matching) => {
    console.log(matching);
    if (matching) {
      const token = jwt.sign({ id: User.id }, process.env.SECRET);
      res.send({ jwt: token });
    } else {
      res.status(400);
      res.send("Mot de passe incorrect, veuillez recommencer");
    }
  });
});

module.exports = loginRouter;
