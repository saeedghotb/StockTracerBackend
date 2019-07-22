const moneyModel = require('../models/Money');

module.exports = {
    //add token to req before sending to money controller
    addAction: (req,res,next)=>{
        const data={
            action_type : req.body.type,
            amount : req.body.amount,
            date : req.body.date,
            reason : req.body.reason,
            user_id : req.body.userId
        }
        moneyModel.create(data,(err,action)=>{
            if(err){
                res.status(404).json({
                    message : err,
                    data : []
                })
            }else{
                res.status(200).json({
                    data : "money action added"
                })
            }
        })
    },
    getAction : (req,res,next)=>{
        moneyModel.find({user_id:req.body.userId},(err,data)=>{
            if(err){
                res.json({
                    message : err
                })
            }else{
                res.status(200).json({
                    data : data
                })
            }
        })
    },
    deleteAction: (req,res,next)=>{
        moneyModel.deleteOne({_id:req.body.action_id},(err,data)=>{
            if(err){
                res.status(400).json({
                    message : err,
                    data : []
                })
            }else{
                res.status(200).json({
                    data : data
                })
            }
        })
    },
    putAction: (req,res,next)=>{
        const data = {
            amount : req.body.amount,
            date : req.body.date
        }
        moneyModel.updateOne({_id:req.body.action_id},data,(err,data)=>{
            if(err){
                res.status(400).json({
                    message : err,
                    data : []
                })
            }else{
                res.status(200).json({
                    data : data
                })
            }
        })
    }
}