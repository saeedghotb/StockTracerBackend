const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const userrouter = require('./routes/user_route');
const moneyRouter = require('./routes/moneyRouter');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
require('./config/mongodb');
// app.use(express.static(path.join(__dirname, 'public')));

var cors = require('cors');
app.use(cors())

app.use('/auth',userrouter);
app.use('/money',validateUser,moneyRouter)

app.get('/',(req,res)=>{
  res.send('stocktracer REST-API backend, try reading the non provided documentation! ("suck it!")');
});

function validateUser(req,res,next){
  jwt.verify(req.headers['x-access-token'],process.env.jwt_key,(err,decoded)=>{
    if(err){
      res.status(404).json({
        message : err.message,
        data : []
      })
    }else{
      req.body.userId = decoded.user_id
      next();
    }
  })
}

// app.use((err,req,res,next)=>{
//   res.status(err.status||500);
//   res.json({
//     error:{
//       message:err.message,
//       error:{}
//     }
//   });
// });


module.exports = app;
