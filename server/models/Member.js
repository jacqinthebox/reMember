var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost:27017/reMember');

var memberSchema = new Schema({
  nickname : String,
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  education: [{ title: String, institute: String, certification: Boolean}]
});


module.exports = mongoose.model('Member', memberSchema);
