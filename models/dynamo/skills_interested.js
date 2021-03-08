var mongoose = require('mongoose');

var skillsInterestedSchema = new mongoose.Schema({
    user_name: String,
    name: String,
    skills_interested: String
});

mongoose.model('SkillsInterested', skillsInterestedSchema, 'skillInt');