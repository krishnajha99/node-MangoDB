var mongoose = require('mongoose');

var skillsOfferedSchema = new mongoose.Schema({
    user_name: String,
    name: String,
    skills_offered: String
});

mongoose.model('SkillsOffered', skillsOfferedSchema, 'skillOffer');