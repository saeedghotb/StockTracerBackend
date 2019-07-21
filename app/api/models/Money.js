const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = new Schema({
    //buy or sell
    action_type : String,
    amount : {
        type : Number,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    reason : String,
    user_id : {
        type : String,
        required : true,
        unique : false
    }
});

module.exports = mongoose.model('money',walletSchema);