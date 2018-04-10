var port = process.env.PORT || 8000;
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app).listen(port);
var bodyParser = require('body-parser')
var connectionCount = 0;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/www'));

// server.listen(port, function() {
//     console.log("Listening on port " + port + "...");
// });