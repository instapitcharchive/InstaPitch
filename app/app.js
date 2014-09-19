'use strict';

require ('angular/angular');
require ('angular-route');

//In app.js, we define the "parent" app
//and its requisite parts, like controllers and services

var pitchApp = angular.module('pitchApp', ['ngRoute']);

//controller
require('./controllers/admin-controller')(pitchApp);

//services
require('./services/skills-service')(pitchApp);

//here we configure its most basic router and basic controller
//(there are other controllers for sub-parts of the app)
pitchApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'pitchController'
    })
    .otherwise({
      redirectTo: '/'
    });
    //todo: need route support for admin
}]);

