var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/build'));

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/skills-development');

app.use(bodyparser.json());
require('./routes/admin-routes')(app);

var server = http.createServer(app);


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
