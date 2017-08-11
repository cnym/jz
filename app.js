var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var routes = require('./routes/index');
var nunjucks = require('nunjucks');
var addFilter = require('./modules/addFilter');

var session = require('express-session');

var app = express();

// view engine setup
var env = nunjucks.configure(path.join(__dirname, 'views'), { // 设置模板文件的目录，为views
	autoescape: false,
	express: app,
	watch: true
});

addFilter(env);

app.set('view engine', 'html');
app.set('view cache', false);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('keyboard'));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(session({
	name: 'connect',
	resave: true,//每次请求都重置session cookie
	saveUninitialized: false,//没有session cookie，则不重新设置，默认无论如何都会重新设置cookie
	secret: 'keyboard'
}));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err,
			title: 'error'
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: err,
		title: 'error'
	});
});

module.exports = app;