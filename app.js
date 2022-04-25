var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/profil");
const cardRouter = require("./routes/card");
const signinRouter = require("./routes/signup");

var app = express();

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/battlecards")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/profil", usersRouter);
app.use("/cards", cardRouter);
app.use("/signup", signinRouter);

module.exports = app;
