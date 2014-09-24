//major-filter.js
'use strict';

module.exports = function(app) {
  app.filter('filterByMajor', function() {

    return function(skills, userSelectedMajor) { //take in an array of skills
      //go through each item, push to new array, return the array
      var filtered = [];
      angular.forEach(skills, function(skill) {
        //must compare type to type
        if(skill.skillType == userSelectedMajor.type) {
          filtered.push(skill);
        }

        if(skill.skillType == "skillgeneral" || userSelectedMajor.type == "trait") {
          filtered.push(skill);
        }

      });
      return filtered;
    };
  });
};
