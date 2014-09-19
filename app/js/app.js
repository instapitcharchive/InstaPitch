'use strict';

require ('angular/angular');
require ('angular-route');

//In app.js, we define the "parent" app
//and its requisite parts, like controllers and services

var pitchApp = angular.module('pitchApp', ['ngRoute']);

//controllers
require('./controllers/admin-controller')(pitchApp);
require('./controllers/pitch-controller')(pitchApp);

//services
require('./services/skills-server')(pitchApp);

//here we configure its most basic router and basic controller
//(there are other controllers for sub-parts of the app)
pitchApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/nav-view.html',
      controller: 'pitchController'
    })
    .when('/admin', {
      templateUrl: '/views/admin/admin-view.html',
      controller: 'adminController'
    })
    .otherwise({
      redirectTo: '/'
    });
    //todo: need route support for admin
}]);

