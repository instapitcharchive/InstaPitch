//write-pitch-controller.js
'use strict';

module.exports = function(app) {
  app.controller('writePitchController', function($scope, $location, userInputService) {

    $scope.userskills = userInputService.get("userskills");
    console.log("userskills get result: " + $scope.userskills);

  });
};
