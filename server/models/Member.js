var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var memberSchema = new Schema({
  nickname : String,
//  email: String,
  firstName: String,
  lastName: String,
//  password: String,
  education: [{ title: String, institute: String, certification: Boolean}]
});

memberSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Member', memberSchema);

