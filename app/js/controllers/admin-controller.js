//admin-controller.js
'use strict';

module.exports = function(app) {
  app.controller('adminController', function($scope, skillsServer, auth) {

    $scope.skillTypes = [
      {name:'trait', type:'trait'},
      {name:'skill (general)', type:'skillgeneral'},
      {name:'Full Stack JavaScript', type:'js'},
      {name:'iOS', type:'ios'},
      {name:'Python', type:'python'},
      {name:'Front-End UX Design', type:'ux'},
      {name:'Ruby', type:'ruby'}
    ];

    $scope.defaultSkillType = $scope.skillTypes[0];

    $scope.getAllSkills = function() {
      if(auth.sendJWT() === 'noauth') return false;

      skillsServer.index()
        .success(function(data) {
          $scope.skills = data;
      });
    };

    $scope.getAllSkills();

    $scope.cancelEdit = function(skill, skillform) {
      skill.editing = false;
      if (skillform.$dirty) {
        $scope.getAllSkills();
      }
    };

    $scope.saveNewSkill = function(form) { //added (form) here
      skillsServer.saveNewSkill($scope.newSkill) //doesn't pull in type data
        .success(function(data) {
          $scope.skills.push(data);
          $scope.newSkill.skillBody = '';
          $scope.newskillform.$setPristine();
        });
    };

    $scope.editSkill = function(skill) {
      skill.editing = true;
    };


    $scope.saveSkill = function(skill) {
        skillsServer.saveOldSkill(skill)
          .success(function(data) {
            $scope.getAllSkills();
        });
    };

    $scope.deleteSkill = function(skill) {
        skillsServer.deleteSkill(skill)
          .success(function(data) {
            $scope.getAllSkills();
        });
    };

    $scope.deleteAll = function() {
      $scope.skills.forEach(function(skill) {
        $scope.deleteSkill(skill);
      });
    };


  });
};
