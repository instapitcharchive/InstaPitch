//pitch-controller.js

'use strict';

module.exports = function(app) {
  app.controller('pitchController', function($scope, $location) {

    //these methods get called by buttons inside templates
    $scope.advanceToSkills = function() {
      $location.path('/skill-select');
    };

    $scope.advanceToPitch = function() {
      $location.path('/write-pitch');
    };

  });
};
