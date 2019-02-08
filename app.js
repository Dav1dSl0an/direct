var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
//var nodemailer = require('nodemailer');
//var passport = require('passport');
var session      = require('express-session');




//var favicon = require('serve-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
//var db = require('./db');
//var config = require('./config.js');

//require('./config/passport')(passport);

/*mongoose.Promise = global.Promise;
var mode = process.env.NODE_ENV;

var mongooseMessage = null;
if (mode=="production"){
  connectionString = db.connectionString_prod;
  mongooseMessage = "Connected to Prod MongoDb";
} else if (mode=="development"){
  connectionString = db.connectionString_dev;
  mongooseMessage = "Connected to Dev MongoDb";
}

mongoose.connect(connectionString, function(err, db) {
  if (db) {
    db.close();
  }
  console.log("attempting to connect to mongoDb");
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log(mongooseMessage);
  }
});
*/

//loging
console.log(process.env.PROD_MONGODB);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: '872893u289huhwuhwuihd7h23q', resave: true, saveUninitialized: true })); // session secret

app.use(express.static(__dirname));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
  next();
});
//app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'dist/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
