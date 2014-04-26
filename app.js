var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var absurd = require('absurd')();

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'js'); // Default extension for render strings without an extension
app.engine('js', absurd.express({ morph: 'html' }));
app.engine('json', absurd.express({ morph: 'html' }));
app.engine('yaml', absurd.express({ morph: 'html' }));
app.engine('yml', absurd.express({ morph: 'html' }));

// CSS middleware setup
app.use(absurd.express({
                        src: path.join(__dirname, 'styles'),
                        dest: path.join(__dirname, 'public/styles'),
												prefix: '/styles',
                        minify: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Other middleware
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', { data: {
            message: err.message,
            error: err
					}
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { data: {
            message: err.message,
            error: {}
					}
    });
});


module.exports = app;
