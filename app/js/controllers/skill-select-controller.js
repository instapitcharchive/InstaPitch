//pitch-controller.js

'use strict';

module.exports = function(app) {
  app.controller('skillSelectController', function($scope, $location, userInputService, skillsServer) {
    //require('../services/force-tree-service')(app);

    $scope.advanceToPitch = function() {
      if ($scope.skillsSelected.length === 3) {
          $location.path('/write-pitch');
          console.log("advance to pitch clicked");
        } else {
          //alert("select 3 skills!");
        }
    };

    $scope.username = userInputService.get();

    $scope.getAllSkills = function() {
      skillsServer.index()
      .success(function(data) {
        $scope.skills = data;
      });
    };

    $scope.getAllSkills();

    $scope.skillsSelected = {};

    $scope.checkboxSelect = function(skill) {
      if ($scope.skillsSelected[skill]) { //if this skill is already in the object
        delete $scope.skillsSelected.skill; //remove it from object
        console.log("removing " + skill);
      } else {
        $scope.skillsSelected[skill];
        console.log("adding " + skill);
      }
    };

  });
};
