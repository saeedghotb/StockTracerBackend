const usermodel = require('../models/user_model');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  signup : (req,res,next)=>{
    let params = {
      name : req.body.name,
      username : req.body.username,
      password : req.body.password,
      email : req.body.email,
      phonenumber : req.body.phonenumber
    }
    usermodel.create(params,(err,user)=>{
      if(err){
        res.status(400).json({
          status : false,
          message : err
        })
      }else{
        res.status(200).json({
          data : "user created successfully"
        })
      }
    })
  },
  login: (req,res,next)=>{
    console.log('login method');
  }
}
