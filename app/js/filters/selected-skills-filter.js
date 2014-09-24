//selectedSkillsFilter
'use strict';

module.exports = function(app) {
  app.filter('filterBySelectedSkill', function() {
    return function(skill) {
      if (!skill) {
        return '';
      }

      if (skill == true) {
        return true; //return this skill, it's selected!
      }

      return false; //don't return this skill, it wasn't selected
    };
  });
};
