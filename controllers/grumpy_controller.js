var express = require("express");

var router = express.Router();
// var burger = require("../models/grumpy");

// get route -> index
router.get("/", function(req, res) {
  res.render("index");
});


module.exports = router;