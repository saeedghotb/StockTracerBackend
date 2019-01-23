const usermodel = require('../models/user_model');
const passport = require('passport');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  signup : (req,res,next)=>{
      res.json({
        message : "signup successful",
        user : req.user
      })
  },
  login: (req,res,next)=>{
    console.log('login method');
    passport.authenticate('login', async(err,user,info)=>{
      try{
          if(err||!user){
              const error = new Error('An error occured');
              return next(err);
          }
          req.login(user,{session:false},async(err)=>{
              if(err) return next(err);
              const body = {_id : user._id, username : user.username};
              const token = jwt.sign({user : body},'secret');
              console.log('user found');
              return res.json({token});
          })
      }catch(error){
          return next(error);
      }
    })(req,res,next);
  }
}
