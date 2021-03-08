var mongoose = require('mongoose');

var userDetailsSchema = new mongoose.Schema({
    user_name: String,
    birth_Date: String,
    first_name: String,
    last_name: String,
    interests: String,
    phone: Number,
    picture: String
});

mongoose.model('UserDetails', userDetailsSchema, 'user');