var express = require("express");

var router = express.Router();
// var burger = require("../models/grumpy");

var camps = {
  Anastasia:{
    campground_name: "Anastasia State Park",
    campground_url:"https://www.floridastateparks.org/park/anastasia",
    city: "St Augustine",
    state: "FL",
    sitenum: "091",
    level: "Site is level",
    shade: "Full shade",
    groundcover: "Hard packed",
    deckpad: "N",
    table: "Y",
    privacy: "Y",
    bookagain: "Y"
  },
  Southern_Komfort:{
    campground_name: "Southern Comfort RV Resort",
    campground_url:"https://www.socorv.com/",
    city: "Homestead",
    state: "FL",
    sitenum: "3",
    level: "Site is level",
    shade: "Full shade",
    groundcover: "Grass",
    deckpad: "Y",
    table: "Y",
    privacy: "N",
    bookagain: "Y"
  },
  Hanna:{
    campground_name: "Kathyrn Hanna Campground",
    campground_url:"http://www.coj.net/departments/parks,-recreation-and-community-services/recreation-and-community-programming/kathryn-abbey-hanna-park.aspx",
    city: "Jacksonville Beach",
    state: "FL",
    sitenum: "49",
    level: "Site is unlevel",
    shade: "Full shade",
    groundcover: "Hard packed",
    deckpad: "N",
    table: "Y",
    privacy: "N",
    bookagain: "N"
  }
};

// get route -> index
router.get("/", function(req, res) {
  campArray = ["Anastasia", "Southern_Comfort", "Hanna"];
  res.render("index", {
    camps: campArray
  });
});
// get route -> index
router.get("/api/camp/:name", function(req, res) {
  var mycamp;
  switch(req.params.name){
    case("Anastasia"):
      mycamp = camps.Anastasia;
      break;
    case("Southern_Komfort"):
      mycamp = camps.Southern_Komfort;
      break;
    case("Hanna"):
      mycamp = camps.Hanna;
      break;
  }
  res.render("camp", {
    camp: mycamp
  });

});

module.exports = router;