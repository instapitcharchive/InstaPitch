var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/skills-development');

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

app.use(bodyparser.json());
require('./routes/admin-routes')(app);

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log("Your Excellency, your server is ready and waiting on port 3000.");
});
