//pitch-controller.js


'use strict';

module.exports = function(app) {
  app.controller('pitchController', function($scope, $location, userInputService) {

    $scope.username = userInputService.get();
    //left off here - trying to retrieve saved user skills
    $scope.userskills = userInputService.get("userskills");
    console.log("userskills get result: " + $scope.userskills);

    $scope.advanceToSkills = function() {
      $location.path('/skill-select');
      userInputService.set("username",$scope.username);
      userInputService.set("usermajor",$scope.usermajor);
    };

/*  testing for removal - want to remove this code
    $scope.advanceToPitch = function() {
      $location.path('/write-pitch');
    };
*/
    $scope.majors = [
      {name:'Full Stack JavaScript',type:'js'},
      {name:'iOS',type:'ios'},
      {name:'Python',type:'python'},
      {name:'Front-End UX Design',type:'ux'},
      {name:'Ruby',type:'ruby'}
    ];

    $scope.username = userInputService.get("username");
    $scope.usermajor = userInputService.get("usermajor");

    if ($scope.usermajor != null) {
      console.log("usermajor is " + $scope.usermajor.name);
    }

  });
};

