var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    category: String
});

mongoose.model('Article', articleSchema, 'articles');