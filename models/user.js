'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var moment = require('moment');

var userSchema = mongoose.Schema({
  basic: {
    email: String,
    password: String
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.basic.password);
};

userSchema.methods.createToken = function(app) {
//pass in the app because it needs to read an app secret that is application wide
  var expires = moment().add(7,'days').valueOf();
  var self = this;
  var token = jwt.encode({
    iss: self._id, //iss means "id"
    expires: expires
  }, app.get('jwtTokenSecret'));
  return token;
};

module.exports = mongoose.model('User', userSchema);
