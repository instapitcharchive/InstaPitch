'use strict';

require ('angular/angular');
require ('angular-route');
require ('angular-base64');
require ('angular-cookies');

//In app.js, we define the "parent" app
//and its requisite parts, like controllers and services

var pitchApp = angular.module('pitchApp', ['ngRoute','ngCookies','base64']);

//filters
require('./filters/major-filter')(pitchApp);
require('./filters/skills-traits-filter')(pitchApp);

//controllers
require('./controllers/admin-controller')(pitchApp);
require('./controllers/pitch-main-controller')(pitchApp);
require('./controllers/skill-select-controller')(pitchApp);
require('./controllers/write-pitch-controller')(pitchApp);
require('./controllers/users-controller')(pitchApp);

//services
require('./services/auth')(pitchApp);
require('./services/skills-server')(pitchApp);
require('./services/user-input-service')(pitchApp);

//directives
require('./directives/new-skill-form')(pitchApp);
require('./directives/edit-skill-form')(pitchApp);

//routes
require('./routes/pitch-routes')(pitchApp);

