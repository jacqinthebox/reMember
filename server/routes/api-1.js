var passport = require('passport');
var mongoose = require('mongoose');
var Member = require('../models/Member');


// /login POSTb
//exports.login = function(req,res) {
//  res.send(req.params.email);
//};


//app.post('/login', passport.authenticate('local'), function(req, res) {
//        res.redirect('/');
//    });


exports.register = function (req, res) {
    Member.register(new Member({ username : req.body.username }), req.body.password, function(err, member) {
            if (err) {
                return res.send(err);
            }

          res.send(member);
        
       
    });
};



// /members GET
exports.members = function(req,res) {
  Member.find({}, function(err, data) {
      res.send(data);
    });
};

//TODO:
// /members DELETE

// /member/id GET
exports.member = function(req, res) {
  Member.findOne({ _id : req.params.id }, function(err, data) {
      res.send(data);
      });
};


// /member/id PUT
exports.editMember = function(req, res) {
    delete req.body._id;
    Member.update({_id: req.params.id}, req.body, function(err, affected) {
      res.send(err);
    });
};


// /member POST 
exports.saveMember = function (req, res) {
    Member.create(req.body, function(err, member) {
      res.send(member);
    });

};
  
