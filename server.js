'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var passport = require('passport');
var app = express();

app.use(express.static(__dirname + '/build'));

app.set('jwtTokenSecret', process.env.JWT_SECRET || 'developmentsecret');
app.set('secret', process.env.SECRET || 'developmentsecret'); //passport requires this, but we don't actually use it

app.use(passport.initialize());

require('./lib/passport')(passport);
var jwtauth = require('./lib/jwtauth')(app);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/skills-development');

app.use(bodyparser.json());
require('./routes/user-routes')(app, passport);
require('./routes/admin-routes')(app, jwtauth.auth);

var server = http.createServer(app);


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
