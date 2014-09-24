//skills-traits-filter.js
//this filter finds just TRAITS
//think of these as "soft skills" and "personality traits"
//they all use the type "trait" in the db
'use strict';

module.exports = function(app) {
  app.filter('filterByTrait', function() {

    return function(skills) {
      var filtered = [];
      angular.forEach(skills, function(skill) {

        if(userSelectedMajor.type == "trait") {
          filtered.push(skill);
        }

      });
      return filtered;
    };
  });
};
