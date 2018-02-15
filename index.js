var port = process.env.PORT || 8000;
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app).listen(port);
var bodyParser = require('body-parser')
var connectionCount = 0;
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/www'));
app.get('/', function(req, res) {

    res.send("Use /json endpoint to send POST requests")
});
app.post('/json', function(req, res) {
    console.log(req.body);
    res.sendStatus(200)
});
app.get('/json', function(req, res) {
    console.log(req.body);
    res.sendStatus(200)
});
server.listen(port, function() {
    console.log("Listening on port " + port + "...");
});