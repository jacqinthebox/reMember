var should = require('should');
var Member = require('../models/Member');
var assert = require('assert');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/local');

describe('Member', function(){

    beforeEach(function(done){
        //clean the database:
        Member.remove(done);
    });

    describe('#save()', function() {
        it('should save', function(done) {
            var member = new Member({firstName: 'Florian' })
            member.save(function(err) {
                if (err) return done(err);
                //assert.equal(volunteer.firstname,'Joe');
                member.should.have.property('firstName','Florian');
                done();
            });
        });
    });

     describe('#list()', function() {
       it('should show a list', function(done) {
              done();                
            });
        });
    });

