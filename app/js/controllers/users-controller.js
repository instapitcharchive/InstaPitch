'use strict';

module.exports = function(app) {
  app.controller('usersController', function($scope, $http, $cookies, $base64, $location) {
    if($location.path() === '/signout') {
      console.log("clicked signout, redirecting to /signout");
      $cookies.jwt = null;
      console.log("$cookies.jwt should be null (users-controller.js): " + $cookies.jwt);
    }

    if(!$cookies.jwt || $cookies.jwt.length >= 10) {
      console.log("$cookies.jwt is either !$cookies.jwt or its length is >= 10 (users-controller.js): " + $cookies.jwt);
      console.log("$cookies.jwt.length is " + $cookies.jwt.length);
      return $location.path('/admin');
    }


    if($location.path() === '/signup') {
      console.log("(users-controller.js) is attempting to set the path to /signup");
      $scope.newuser = true;
    }

    $scope.signin = function() {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode($scope.user.email + ':' + $scope.user.password);
      $http({
        method: 'GET',
        url: '/api/v_0_0_1/users'
      })
      .success(function(data) {
        $cookies.jwt = data.jwt;
        console.log("$cookies.jwt is being set equal to data.jwt in (users-controller.js): " + $cookies.jwt);
        $location.path('/admin');
      })
      .error(function(data) {
        console.log('error');
        console.log(data);
      });
    };

    $scope.validatePassword = function() {
      return $scope.user.password === $scope.user.passwordConfirmation;
    };

    $scope.createNewUser = function() {
      console.log('clicked');
      $http({
        method: 'POST',
        url: '/api/v_0_0_1/users',
        data: $scope.user
      })
      .success(function(data) {
        $cookies.jwt = data.jwt;
        $location.path('/admin');
      })
      .error(function(data) {
        console.log('error');
        console.log(data);
      });
    };
  });
};
