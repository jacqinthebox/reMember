var mongoose = require('mongoose');
var Member = require('../models/Member');

// /members GET
exports.members = function(req,res) {
  Member.find({}, function(err, data) {
      res.send(data);
    });
};

//TODO:
// /members PUT
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
  
