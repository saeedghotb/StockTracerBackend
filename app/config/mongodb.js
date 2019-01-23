require('dotenv').config();
const mongoose = require('mongoose');

mongoose.promise = global.Promis;
mongoose.connect(process.env.dbaddress);
