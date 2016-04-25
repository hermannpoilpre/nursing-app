var express = require('express');
var morgan = require('morgan');

var app = express();
var config = require('./config');

var port = process.env.PORT || 80;
app.set('superSecret', config.secret);

app.use(morgan('dev'));

app.get("/", function(req, res) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Welcome!');
});

app.get("/auth", function(req, res) {
    res.setHeader(200, 'Content-Type', 'application/json');
    var result = {
        firstname: 'Elliot',
        lastname: 'Smith'
    };
    res.send(JSON.stringify(result));
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
