const TradeModel = require('../../models/TradeModel');

module.exports = {
    addTrade : (req,res,next)=>{
        const body_params = {
            name : req.body.name,
            short_name : req.body.short_name,
            instrument_id : req.body.instrument_id,
            buy_price : req.body.buy_price,
            buy_amount : req.body.buy_amount,
            remaining : req.body.buy_amount,
            buy_date : req.body.buy_date,
            percentage_of_equity_at_time : req.body.percentage_of_equity_at_time,
            stoploss : req.body.stoploss,
            takeprofit : req.body.takeprofit,
            risk : req.body.risk,
            user_id : req.body.userId,
            images : req.body.images,
            description :req.body.description
        }
        TradeModel.create(body_params,(err,trade)=>{
            if(err){
                res.status(404).json({
                    message : err.message,
                    data : []
                })
            }else{
                res.status(200).json({
                    message : 'trade successfully added',
                    data : trade
                })
            }
        })
    },
    deleteTrade : (req,res,next)=>{
        TradeModel.findById(req.body.tradeId,(err,trade)=>{
            if(err){
                res.status(404).json({
                    message : err.message,
                    data : []
                })
            }else if(trade){
                TradeModel.deleteOne({_id:req.body.tradeId},(err,trade)=>{
                    if(err){
                        res.status(404).json({
                            message : err.message,
                            data : []
                        })
                    }else{
                        res.status(200).json({
                            message : 'trade successfully deleted',
                            data : trade
                        })
                    }
                })
            }else{
                res.status(404).json({
                    message : 'failed to delete, record not found',
                    data : []
                })
            }
        })
    },
    putTrade : (req,res,err)=>{
        TradeModel.findByIdAndUpdate(req.body.tradeId,req.body,{new: true},(err,trade)=>{
            if(err){
                res.status(404).json({
                    message : err.message,
                    data : []
                })
            }else{
                res.status(200).json({
                    message : 'trade successfully updated',
                    data : trade
                })
            }
        })
    },
    getTrades : (req,res,err)=>{
        TradeModel.find({user_id:req.body.userId},(err,trades)=>{
            if(err){
                res.status(404).json({
                    message : err.message,
                    data : []
                })
            }else{
                res.status(200).json({
                    data : trades
                })
            }
        })
    }
}