var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/my-collection", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/my-collection/add", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/my-collection/delete", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/my-collection/see", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
