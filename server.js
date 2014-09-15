var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log("Your Excellency, your server is ready and waiting on port 3000.");
});
