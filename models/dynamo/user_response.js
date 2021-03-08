var mongoose = require('mongoose');

var userResponseSchema = new mongoose.Schema({
    name: String,
    segment: String,
    interested: String
});

mongoose.model('UserResponse', userResponseSchema, 'userResp');