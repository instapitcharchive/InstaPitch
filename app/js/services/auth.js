'use strict';

module.exports = function(app) {
  app.factory('auth', function($http, $cookies, $location) {
    var auth = {
      sendJWT: function() {

        //if no cookies.jwt OR cookies.jwt.length < 10
        if(!$cookies.jwt || $cookies.jwt.length < 10){
          $location.path('/signin'); //loop bug here?
          return 'noauth';
        }

        $http.defaults.headers.common['jwt'] = $cookies.jwt;
      }
    };

    return auth;
  });
};
