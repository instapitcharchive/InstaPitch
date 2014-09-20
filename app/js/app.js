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
require('./services/force-tree-service')(pitchApp);

//directives
require('./directives/new-skill-form')(pitchApp);

//routes
require('./routes/pitch-routes')(pitchApp);

