const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const userrouter = require('./routes/user_route');
// const bookrouter = require('./routes/book_route');
// const secretbookrouter = require('./routes/secret_books');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
require('./config/mongodb');
// app.use(express.static(path.join(__dirname, 'public')));

var cors = require('cors');
app.use(cors())
// mongoose.set('debug',false);
app.use((req,res,next)=>{
  console.log('request to server');
  next();
});
app.use('/auth',userrouter);
// app.use('/api/books',bookrouter);

app.get('/',(req,res)=>{
  res.send('stocktracer REST-API backend, try reading the non provided documentation! ("suck it!")');
});

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
