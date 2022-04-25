const express = require("express");
const router = express.Router();
const userSchema = require("../schemas/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const salt = 10;

router.post("/", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email) return res.sendStatus(400);
  if (!password) return res.sendStatus(400);
  if (!confirmPassword) return res.sendStatus(400);

  if (password !== confirmPassword) return res.sendStatus(400);

  const hashedPassword = await bcrypt.hash(password, salt);

  const userMail = await userSchema.find({ email });

  if (userMail.length === 0) {
    try {
      await userSchema.create({ email, password: hashedPassword });
    } catch (err) {
      return res.sendStatus(500);
    }
    res.sendStatus(201);
  } else {
    res.status(400);
    res.send("Existe déja");
  }
});

module.exports = router;
