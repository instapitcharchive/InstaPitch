'use strict';

module.exports = function(app) {
  app.directive('newSkillForm', function() {
    var direc = {
      restrict: 'EAC',
      templateUrl: 'views/admin/new-skill-form.html'
    };

    return direc;
  });
};
