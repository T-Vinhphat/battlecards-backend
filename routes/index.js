var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Battle Cards" });
});

router.get("/game", function (req, res, next) {
  res.render("game", { title: "Express" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

router.get("/signin", function (req, res, next) {
  res.render("signin", { title: "Express" });
});

router.get("/profil/:user", function (req, res, next) {
  res.render("profil", { title: "Express" });
});

router.get("/shop", function (req, res, next) {
  res.render("shop", { title: "Express" });
});

router.get("/collection", function (req, res, next) {
  res.render("collection", { title: "Express" });
});
module.exports = router;
