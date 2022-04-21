var express = require("express");
var router = express.Router();

const profil = require("../componants/profil");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/game", function (req, res, next) {
  res.send("plateau");
});

router.get("/login", function (req, res, next) {
  res.send("login");
});

router.get("/signin", function (req, res, next) {
  res.send("signin");
});

router.get("/profil/:user", profil.gatherInfo);

router.get("/shop", function (req, res, next) {
  res.send("shop");
});

router.get("/collection", function (req, res, next) {
  res.send("collection");
});
module.exports = router;
