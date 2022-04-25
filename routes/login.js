var express = require("express");
var loginRouter = express.Router();
const user = require("../schemas/userSchema");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(400);

  const findUser = await user.find({ email });
  if (findUser.length === 0) {
    res.status(400);
    return res.send("Compte inexistant");
  }

  res.send("Vous êtes connecté");
});

module.exports = loginRouter;
