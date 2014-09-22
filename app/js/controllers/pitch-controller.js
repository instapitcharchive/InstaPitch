//pitch-controller.js

'use strict';

module.exports = function(app) {
  app.controller('pitchController', function($scope, $location, userInputService) {

    $scope.username = userInputService.get();
    //these methods get called by buttons inside templates
    $scope.advanceToSkills = function() {
      $location.path('/skill-select');
      userInputService.set($scope.username);
    };

    $scope.advanceToPitch = function() {
      $location.path('/write-pitch');
    };

  });
};
