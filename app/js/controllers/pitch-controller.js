//pitch-controller.js

'use strict';

//pitch controller stuff goes in here
module.exports = function(app) {
//what goes here?
  app.controller('pitchController', function($scope, $location) {
    //pitch controller methods go here eventually
    $scope.advanceToSkills = function() {
      $location.path('/skill-select');
    };

  });
};
