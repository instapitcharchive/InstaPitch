//skill-select-controller.js
'use strict';

module.exports = function(app) {
  app.controller('skillSelectController', function($scope, $location, userInputService, skillsServer) {

    $scope.skillsSelected = {};
    $scope.skillsSelectedNum = 0;

    var skillsRequired = 3;
    $scope.advanceToPitch = function(skillsform) {
      if ($scope.skillsSelectedNum === skillsRequired) {
        userInputService.set("userskills",$scope.skillsSelected);
        $location.path('/write-pitch');
      }
    };

    $scope.username = userInputService.get("username");
    $scope.usermajor = userInputService.get("usermajor");

    $scope.getAllSkills = function() {
      skillsServer.index()
      .success(function(data) {
        $scope.skills = data;
      });
    };

    $scope.getAllSkills();

    $scope.checkboxSelect = function(input) {
      console.log("selecting a checkbox: " + input.skillBody);

      if ($scope.skillsSelected[input.skillBody] == input) { //if this skill is already in the object
        $scope.skillsSelectedNum -= 1;
        delete $scope.skillsSelected[input.skillBody]; //remove it from object
        console.log("removing " + input.skillBody);
      } else { //add it to the object
        $scope.skillsSelectedNum += 1;
        $scope.skillsSelected[input.skillBody] = input;
        console.log("adding " + input.skillBody + " to $scope.skillsSelected: " + $scope.skillsSelected[input.skillBody]["skillBody"]);
      }
    };
  });
};
