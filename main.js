var express = require('express');
var compress = require('compression');
var bodyParser = require('body-parser')
var morgan = require('morgan');

var app = express();
var jsonParser = bodyParser.json();
var config = require('./config');
var port = process.env.PORT || 80;

app.set('superSecret', config.secret);

app.use(morgan('dev'));
app.use(compress());

const CODE_SUCCESS = 0;
const CODE_BAD_PARAMETERS = 400;
const CODE_UNAUTHORIZED = 401;

function error (response, code, error) {
    var result = {
        code: code
    };
    response.send(JSON.stringify(result));
}

function success (response, data) {
    var result = {
        code: CODE_SUCCESS,
        data: data
    };
    response.send(JSON.stringify(result));
}

/**
 * Default page
 */
app.get("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome!');
});

/**
 * Vérification de l'email
 */
app.post("/check-email", jsonParser, function(req, res) {
    if (!req.body || !req.body.email) {
        error(res, CODE_BAD_PARAMETERS, 'Paramètres incorrects');
    } else {
        if (req.body.email == 'hermannpoilpre@gmail.com') {
            success(res, true);
        } else {
            success(res, false);
        }
    }
});

/**
 * Authentification
 */
app.post("/auth", jsonParser, function(req, res) {
    if (!req.body || !req.body.email || !req.body.password) {
        error(res, CODE_BAD_PARAMETERS, 'Paramètres incorrects');
    } else {
        if (req.body.email == 'hermannpoilpre@gmail.com' && req.body.password == '1234') {
            success(res, {
                token: '9876',
                id: 123456789,
                firstname: 'Hermann',
                lastname: 'Poilpre'
            });
        } else {
            error(res, CODE_UNAUTHORIZED, 'Identifiants incorrects');
        }
    }
});

/**
 * Récupération des comptes
 */
app.get("/get-accounts", function(req, res) {
    if (!req.body || !req.body.token || !req.body.user) {
        error(res, CODE_BAD_PARAMETERS, 'Paramètres incorrects');
    } else if (req.body.token != '9876' ) {
        error(res, CODE_UNAUTHORIZED, 'Non connecté');
    } else {
        success(res, [
            {
                id: 1,
                number: '0123456789A',
                type: 1
            },
            {
                id: 1,
                number: '0123456789A',
                type: 1
            },
        ]);
    }
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
