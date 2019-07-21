const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    name : String,
    short_name : {
        type : String,
        required : true
    },
    instrument_id : {
        required : true
    },
    buy_price : Number,
    //initial buy amount
    buy_amount : Number,
    //remaining number of shares
    remaining : Number,
    buy_date : String,
    percentage_of_equity_at_time: Number,
    //stores each sell information
    sellOffs : [],
    stoploss : [],
    takeprofit : [],
    risk : number,
})

module.exports = mongoose.model('Trades',tradeSchema)