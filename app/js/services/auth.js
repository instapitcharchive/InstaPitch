'use strict';

module.exports = function(app) {
  app.factory('auth', function($http, $cookies, $location) {
    var auth = {
      sendJWT: function() {
        if(!$cookies.jwt || $cookies.jwt.length < 10){
          console.log("$cookies.jwt in (auth.js) should be null: " + $cookies.jwt);
          $location.path('/signin');
          return 'noauth';
        }

        $http.defaults.headers.common['jwt'] = $cookies.jwt;
        console.log("$cookies.jwt in (auth.js line 14) should be NOT null: " + $cookies.jwt);
      }
    };

    return auth;
  });
};
