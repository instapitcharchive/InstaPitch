var mongoose = require('mongoose');

var skillSchema = mongoose.Schema({
  skillBody: String,
  skillType: String //we only save the type
});

module.exports = mongoose.model('Skill', skillSchema);
