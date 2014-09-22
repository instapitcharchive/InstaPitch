var mongoose = require('mongoose');

var skillSchema = mongoose.Schema({
  skillBody: String,
  skillType: String
});

module.exports = mongoose.model('Skill', skillSchema);
