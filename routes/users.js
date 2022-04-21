var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/my-collection", function (req, res, next) {
  res.send("all card");
});

router.get("/my-collection/add", function (req, res, next) {
  res.send("add card");
});

router.get("/my-collection/delete", function (req, res, next) {
  res.send("delete card");
});

router.get("/my-collection/see", function (req, res, next) {
  res.send("see card");
});

module.exports = router;
