'use strict';

module.exports = function(app) {
  app.factory('skillsServer', function($http) {

    var errFunc = function(data, status) {
      console.log('error!');
      console.log(data);
      console.log(status);
    };

    var parseSkill = function(note) {
      return {skillBody: skill.skillBody}; //okay to return obj literal if can do it on one line
    };

    var skill = {
      index: function() {
        var promise = $http({
          method: 'GET',
          url: '/api/v_0_0_1/skills'
        })
          .error(function(data, status) {
            errFunc(data,status);
          });
        return promise;
      },

      saveNewSkill: function(skill) {
        var promise = $http.post('/api/v_0_0_1/skills', parseSkill(skill))
          .error(function(data,status) {
            errFunc(data,status);
          });
        return promise;
      },

      saveOldSkill: function(skill) {
        var promise = $http.put('/api/v_0_0_1/skills/' + skill._id, parseSkill(skill))
          .error(function(data,status) {
            errFunc(data,status);
          });
        return promise;
      },

      deleteSkill: function(skill) {
        var promise = $http.delete('/api/v_0_0_1/skills/' + skill._id)
          .error(function(data,status) {
            errFunc(data,status);
          });
        return promise;
      },
    };

    return skill;

  });
};
