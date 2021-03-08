var express = require("express");
var async = require("async");
var router = express.Router();
var jsonResponse = require("../models/jsonResponse");
var mongoose = require("mongoose");
var Article = mongoose.model("Article");

/* Default GET JSON for Mongo API */
router.get("/", function(req, res, next) {
  var response = new jsonResponse("Default /api endpoint for skillshare-api", 200, []);
  res.json(response).status(response.status);
});

/* Get all articles */
router.get("/articles", function(req, res, next) {
  Article.find({})
    .then(function(articles) {
      var response = new jsonResponse("ok", 200, articles);
      res.json(response).status(response.status);
    })
    .catch(next);
});

module.exports = router;