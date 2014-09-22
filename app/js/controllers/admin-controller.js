'use strict';

module.exports = function(app) {
  app.controller('adminController', function($scope, skillsServer) {

    $scope.getAllSkills = function() {
     skillsServer.index()
      .success(function(data) {
        $scope.skills = data;
      });
    };

    $scope.getAllSkills();

    $scope.saveNewSkill = function() {
      skillsServer.saveNewSkill($scope.newSkill)
        .success(function(data) {
          $scope.skills.push(data);
        });
    };

    $scope.editSkill = function(skill) {
      skill.editing = true;
    };

    $scope.cancelEdit = function(skill, skillform) {
      skill.editing = false;
      if (skillform.$dirty) {
        $scope.getAllSkills();
      }
    };

    $scope.saveSkill = function(skill) {
        skillsServer.saveOldSkill(skill)
          .success(function(data) {
            $scope.getAllSkills();
        })
    };

    $scope.deleteSkill = function(skill) {
        skillsServer.deleteSkill(skill)
          .success(function(data) {
            $scope.getAllSkills();
        })
    };

    $scope.deleteAll = function() {
      $scope.skills.forEach(function(skill) {
        $scope.deleteSkill(skill);
      });
    };


  });
};
