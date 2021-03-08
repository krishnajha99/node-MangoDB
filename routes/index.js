var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
var jsonResponse = require('../models/jsonResponse');

/* Default GET for skill share api */
router.get('/', function(req, res, next) {
  var response = new jsonResponse("Default ratings api endpoint", 200, []);
  res.json(response).status(response.status);
});

/* api health check endpoint */
router.get('/healthz', function(req, res, next) {
  var dynamodbState = mongoose.connection.readyState;
  if(dynamodbState == 1) {
    res.status(200).send("API health check - OK");
  }
  else {
    res.status(500).send("API health check - FAILURE - Mongoose state " + mongoose.STATES[mongoose.connection.readyState]);
  }
});

module.exports = router;
