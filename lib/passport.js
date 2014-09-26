'use strict';

var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/user');

module.exports = function(passport) {
  //send in passport parameter like how we send in the app parameter
  //it's so we can access passport variable in multiple diffrent places

  passport.use('basic', new BasicStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({'basic.email': email}, function(err, user) {
      if (err) return done(err);

      if (!user) return done(null, false); //not an err, but user is not authenticated

      if(!user.validPassword(password)) return done(null, false);

      return done(null, user); //return the user if the user successfully authenticates
    });
  }));
};
