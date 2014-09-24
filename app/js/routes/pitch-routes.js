//pitch-routes.js
'use strict';

module.exports = function(app) {

  app.config(function($routeProvider) {
    $routeProvider

      //default page
      .when('/', {
        templateUrl: '/views/public/pitch-main-view.html',
        controller: 'pitchMainController'
      })

      //admin
      .when('/admin', {
        templateUrl: '/views/admin/admin-view.html',
        controller: 'adminController'
      })

      //second page
      .when('/skill-select', {
        templateUrl: '/views/public/skill-select-view.html',
        controller: 'skillSelectController'
      })

      //third page
      .when('/write-pitch', {
        templateUrl: '/views/public/write-pitch-view.html',
        controller: 'writePitchController'
      })

      //default to main
      .otherwise({
        redirectTo: '/'
      });
  });
};
