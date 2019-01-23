const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const saltRounds = 10;

const userSchema = new Schema({
  username : {
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    unique:true
  }
});

userSchema.pre('save', function(next){
	this.password = bcrypt.hashSync(this.password, saltRounds);
	next();
});

userSchema.methods.isValidPassword = function(password){
  const user = this;
  const compare = bcrypt.compareSync(password, user.password);
  return compare;
}

module.exports = mongoose.model('users',userSchema);
