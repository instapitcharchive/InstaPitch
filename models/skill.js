var mongoose = require('mongoose');

var skillSchema = mongoose.Schema({
  skillBody: String
});

module.exports = mongoose.model('Skill', skillSchema);
