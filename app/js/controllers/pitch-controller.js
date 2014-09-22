//pitch-controller.js


'use strict';

module.exports = function(app) {
  app.controller('pitchController', function($scope, $location, userInputService) {

    $scope.username = userInputService.get();

    $scope.advanceToSkills = function() {
      $location.path('/skill-select');
      userInputService.set($scope.username);
    };

    $scope.advanceToPitch = function() {
      $location.path('/write-pitch');
    };

    $scope.majors = [
      {name:'Full Stack JavaScript'},
      {name:'iOS'},
      {name:'Python'},
      {name:'Front-End UX Design'},
      {name:'Ruby'}
    ];

    $scope.defaultMajor = $scope.majors[0];

  });
};

