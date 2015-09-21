var express = require('express');
var morgan = require('morgan');

var app = express();
var config = require('./config');

var port = process.env.PORT || 8080;
app.set('superSecret', config.secret);

app.use(express.static("./public"));
app.use(morgan('dev'));

app.get("/app", function(req, res) {
    res.sendFile("public/index.html", { root: __dirname });
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
