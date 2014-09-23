//edit-skill-form.js

'use strict';

module.exports = function(app) {
  app.directive('editSkillForm', function() {
    var direc = {
      restrict: 'EAC',
      templateUrl: 'views/admin/edit-skill-form.html'
    };

    return direc;
  });
};
