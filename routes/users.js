var express = require("express");
var router = express.Router();

const myCollection = require("../componants/myCollection");

/* GET users listing. */
router.get("/my-collection", myCollection.gatherDeck);

router.post("/my-collection", myCollection.addCard);

router.post("/my-collection/add", myCollection.addDeck);

router.post("/my-collection/user", myCollection.addUser);

router.get("/my-collection/delete", function (req, res, next) {
  res.send("delete card");
});

router.get("/my-collection/see", function (req, res, next) {
  res.send("see card");
});

module.exports = router;
