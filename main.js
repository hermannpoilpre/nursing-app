var express = require('express');
var compress = require('compression');
var morgan = require('morgan');

var app = express();
var config = require('./config');

var port = process.env.PORT || 80;
app.set('superSecret', config.secret);

app.use(morgan('dev'));
app.use(compress());

app.get("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome!');
});

app.get("/check-email", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var result = true;
    res.send(JSON.stringify(result));
});

app.get("/auth", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var result = {
        firstname: 'Elliot',
        lastname: 'Smith'
    };
    res.send(JSON.stringify(result));
});

app.get("/get-accounts", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var result = {

    };
    res.send(JSON.stringify(result));
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
