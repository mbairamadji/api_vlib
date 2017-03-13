var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var request = require('request');

var index = require('./routes/index');
var lagny = require('./routes/lagny');
var vincennes = require('./routes/vincennes');
var republique = require('./routes/republique');
var paris2 = require('./routes/paris2');
var search = require('./routes/search');


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/search', search);
app.use('/lagny', lagny);
app.use('/vincennes', vincennes);
app.use('/republique', republique);
app.use('/paris2', paris2);






app.listen(3000, function() {
	console.log("App tourne sur le port 3000")
});

module.exports = app;