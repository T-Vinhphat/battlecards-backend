require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/profil");
const cardRouter = require("./routes/card");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");

var app = express();

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
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
app.use("/login", loginRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);

module.exports = app;
