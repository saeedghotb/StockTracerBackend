const mongoose = require('mongoose');

mongoose.promise = global.Promis;
mongoose.connect("mongodb://Saeed:saeed1234@ds163054.mlab.com:63054/passport");
