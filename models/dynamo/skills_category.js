var mongoose = require('mongoose');

var skillsCategorySchema = new mongoose.Schema({
    category: String
});

mongoose.model('SkillCategory', skillsCategorySchema, 'skillcat');