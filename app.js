// Import necessary modules
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();

var indexRouter = require("./routes/indexRouter.js");
var loginRouter = require("./routes/loginRouter.js");

// Set the views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev')); // can remove later
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// Set the path to your public directory
const publicDirectory = path.join(__dirname, 'public');

// Serve static files from the public directory
app.use(express.static(publicDirectory));

// Define routes
app.use("/", indexRouter);
app.use("/goToLoginPage", loginRouter);
app.use("/attemptLogin", loginRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
