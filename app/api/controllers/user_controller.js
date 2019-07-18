/**
 * user controller 
 * containing signup and login control functions
 */
const usermodel = require('../models/user_model');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  //sign up controller
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
    const {username,password} = req.body;
    if(!username||!password){
      res.status(400).json({
        message : "username and password fields are required"
      })
    }else{
      usermodel.findOne({username:username},(err,user)=>{
        if(err){
          res.status(400).json({
            message : "username or password is incorrect"
          })
        }else{
          if(user.isValidPassword(password)){
            const token = jwt.sign({username},process.env.jwt_key,{
              algorithm : 'HS256',
              expiresIn : '72h'
            })
            const userInfo = {
              username : user.username,
              name : user.name,
              email : user.email
            }
            res.status(200).json({
              status : "success",
              data : {user:userInfo,token:token}
            })
          }else{
            res.status(400).json({
              message : "username or password is incorrect"
            })
          }
        }
      })
    }
  }
}