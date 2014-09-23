//pitch-controller.js


'use strict';

module.exports = function(app) {
  app.controller('pitchController', function($scope, $location, userInputService) {

    $scope.username = userInputService.get();

    $scope.advanceToSkills = function() {
      $location.path('/skill-select');
      userInputService.set("username",$scope.username);
      userInputService.set("usermajor",$scope.usermajor);
    };

    $scope.advanceToPitch = function() {
      $location.path('/write-pitch');
    };

    $scope.majors = [
      {name:'Full Stack JavaScript',type:'js'},
      {name:'iOS',type:'ios'},
      {name:'Python',type:'python'},
      {name:'Front-End UX Design',type:'ux'},
      {name:'Ruby',type:'ruby'}
    ];

    $scope.usermajor = $scope.majors[0];
    $scope.username = userInputService.get("username");

  });
};

