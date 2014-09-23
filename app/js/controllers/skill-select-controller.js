//pitch-controller.js

'use strict';

module.exports = function(app) {
  app.controller('skillSelectController', function($scope, $location, userInputService, skillsServer) {

    $scope.advanceToPitch = function() {
      if ($scope.skillsSelectedNum === 3) {
          $location.path('/write-pitch');
          console.log("advance to pitch clicked");
        } else {
          console.log("skillsSelectedNum " + $scope.skillsSelectedNum);
        }
    };

    $scope.username = userInputService.get("username");
    $scope.usermajor = userInputService.get("usermajor");

    $scope.filterFn = function(skill) {
      if (skill.skillType == "skillgeneral" || skill.skillType == "trait") {
        return true;
      }

      if (skill.skillType == $scope.usermajor.type) {
        return true; //include in results
      }
      return false; //if it doesn't match major, don't include in results
    }

    $scope.getAllSkills = function() {
      skillsServer.index()
      .success(function(data) {
        $scope.skills = data;
      });
    };

    $scope.getAllSkills();

    $scope.skillsSelected = {};
    $scope.skillsSelectedNum = 0;

    $scope.checkboxSelect = function(skill) {
      if ($scope.skillsSelected[skill] == true) { //if this skill is already in the object
        delete $scope.skillsSelected[skill]; //remove it from object
        $scope.skillsSelectedNum -= 1;
        console.log("removing " + skill);
      } else {
        $scope.skillsSelected[skill] = true;
        console.log($scope.skillsSelected);
        $scope.skillsSelectedNum += 1;
        console.log("adding " + skill);
      }
    };



  });
};
