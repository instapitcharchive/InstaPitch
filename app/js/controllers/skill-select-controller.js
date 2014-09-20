//pitch-controller.js

'use strict';

module.exports = function(app) {
  app.controller('skillSelectController', function($scope, $location) {
    require('../services/force-tree-service')(app);

    $scope.advanceToPitch = function() {
      $location.path('/write-pitch');
      console.log("advance to pitch clicked");
    };

  });
};
