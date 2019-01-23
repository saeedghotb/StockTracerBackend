const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const userrouter = require('./routes/user_route');
const bookrouter = require('./routes/book_route');
const passport = require('passport')
const secretbookrouter = require('./routes/secret_books');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
require('./config/mongodb');
app.use(express.static(path.join(__dirname, 'public')));

var cors = require('cors');
app.use(cors())
// mongoose.set('debug',false);
require('./passport');
app.use((req,res,next)=>{
  console.log('request to server');
  next();
});
app.use('/auth',userrouter);
app.use('/api/books',bookrouter);
app.use('/api/secretbooks',passport.authenticate('jwt',{session:false}),secretbookrouter);

// app.use((err,req,res)=>{
//   res.status(err.status||500);
//   res.json({
//     error:{
//       message:err.message,
//       error:{}
//     }
//   });
// });

app.get('/',(req,res)=>{
  res.send('passport test');
});

module.exports = app;
