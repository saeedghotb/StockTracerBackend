require('dotenv').config();
const mongoose = require('mongoose');

mongoose.promise = global.Promis;
mongoose.connect(process.env.dbaddress,{useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'mongo db connection connection error:'))
db.once('open',function(){
    console.log('connected to database')
})