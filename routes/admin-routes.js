var Skill = require('../models/skill');

module.exports = function(app) {
  var baseUrl = '/api/v_0_0_1/skills';

  app.get(baseUrl, function(req, res){
    Skill.find({}, function(err, skills) {
      if (err) return res.status(500).json(err);
      return res.json(skills);
    });
  });

  app.post(baseUrl, function(req, res) {
    var skill = new Skill(req.body);
    console.dir(skill);
    skill.save(function(err, resSkill) {
      if (err) return res.status(500).json(err);
      return res.send(resSkill);
    });
  });

  app.get(baseUrl + '/:id', function(req, res) {
    Skill.findOne({'_id': req.params.id}, function(err, skill) {
      if (err) return res.status(500).json(err);
      return res.json(skill);
    });
  });

  app.put(baseUrl + '/:id', function(req, res) {
    var skill = req.body;
    delete skill._id;
    Skill.findOneAndUpdate({'_id': req.params.id}, skill, function(err, resSkill) {
      if (err) return res.status(500).json(err);
      return res.status(202).json(resSkill);
    });
  });

  app.delete(baseUrl + '/:id', function(req, res) {
    Skill.remove({'_id': req.params.id}, function(err, resSkill) {
      if (err) return res.status(500).json(err);
      return res.status(200).json({'msg': 'deleted'});
    });
  });
};
