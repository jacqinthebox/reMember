var express = require('express');
var http = require('http');
var path = require('path');

var mongoose = require('mongoose');


//!!! added for passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Member = require('./models/Member');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger());
app.use(express.methodOverride());
app.use(express.cookieParser());

//!!! added for passport
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, '../public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//!!! added for passport
passport.use(new LocalStrategy(Member.authenticate()));
passport.serializeUser(Member.serializeUser());
passport.deserializeUser(Member.deserializeUser());


mongoose.connect('mongodb://localhost:27017/local');


//!!! moved the routes to separate file
var api = require('./routes/api')(app);

app.all('/', function(req, res) {
  res.sendfile('index.html', { root: "../public" });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
