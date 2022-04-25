var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/profil");
const cardRouter = require("./routes/card");
<<<<<<< HEAD
const loginRouter = require("./routes/login");
=======
const signupRouter = require("./routes/signup");
>>>>>>> c9faf7940509d49f16eb7f8e87708b3f8a79a818

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
<<<<<<< HEAD
app.use("/login", loginRouter);
=======
app.use("/signup", signupRouter);
>>>>>>> c9faf7940509d49f16eb7f8e87708b3f8a79a818

module.exports = app;
