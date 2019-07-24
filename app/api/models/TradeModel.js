const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    name : String,
    short_name : {
        type : String,
        required : true
    },
    instrument_id : {
        type : String,
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
    sellOffs : [{
        sell_price : {
            type : Number,
            required : true
        },
        sell_amount : {
            type : String,
        },
        sell_amount : {
            type : Number,
            required : true
        }
    }],
    stoploss : [],
    takeprofit : [],
    risk : Number,
    user_id : {
        type : String,
        required : true
    },
    images : [{
        image : String,
        save_date : String,
        due_date : String,
        description : String,
        tradeId : String
    }],
    description : String
})

module.exports = mongoose.model('Trades',tradeSchema)