var passport = require('passport');
var mongoose = require('mongoose');
var Member = require('../models/Member');

module.exports = function (app) {

  //login section
  app.post('/login', passport.authenticate('local'), function(req, res) {
    if(req.user) {    
      res.redirect('/');
    }
  });

  app.get('/login', function(req, res) {
    if(req.user) {
      res.send(req.user.username);
     } else {
      res.send(401);
     }
  });


  app.post('/register', function (req, res) {
    Member.register(new Member({ username : req.body.username }), req.body.password, function(err, member) {
      if (err) {
        return res.send(err);
      }
      res.send(member);       
    });
  });


  //member section
  // /members GET
  app.get('/members',ensureAuthenticated, function(req,res) {
  //  if(req.isAuthenticated){
      Member.find({}, function(err, data) {
        res.send(data);
      });
 //   } else { res.redirect('/login') }
  });

  // /member/id GET
  app.get('/member/:id',passport.authenticate('local'), function(req, res) {
    Member.findOne({ _id : req.params.id }, function(err, data) {
      res.send(data);
    });
  });


  app.put('/member/:id', passport.authenticate('local'), function(req, res) {
    delete req.body._id;
    Member.update({_id: req.params.id}, req.body, function(err, affected) {
      res.send(err);
    });
  });

  app.post('/member',passport.authenticate('local'),function(req,res) {
    Member.create(req.body, function(err, member) {
      res.send(member);
    });

  });

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  }
}
