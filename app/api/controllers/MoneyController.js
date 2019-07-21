const moneyModel = require('../models/Money');

module.exports = {
    //add token to req before sending to money controller
    addAction: (req,res,next)=>{
        const data={
            action_type : req.body.type,
            amount : req.body.amount,
            date : req.body.date,
            reason : req.body.reason,
            // user_id : 
        }
        moneyModel.create(data,(err,action)=>{
            if(err){
                res.status(404).json({
                    message : err
                })
            }else{
                res.status(200).json({
                    data : "money action added"
                })
            }
        })
    },
    deleteAction: (req,res,next)=>{

    },
    putAction: (req,res,next)=>{

    }
}