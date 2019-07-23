const TradeModel = require('../../models/TradeModel');

module.exports = {
    addImage : (req,res,err)=>{
        TradeModel.findByIdAndUpdate(req.body.tradeId,{$push: {images:req.body}},{new: true},(err,trade)=>{
            if(err){
                res.status(404).json({
                    message : err.message,
                    data : []
                })
            }else{
                res.status(200).json({
                    message : 'image successfully added',
                    data : trade
                })
            }
        })
    },
    removeImage : (req,res,next)=>{
        TradeModel.findByIdAndUpdate(req.body.tradeId,{$pull:{images:{"_id":req.body.imageId}}},{new:true},(err,image)=>{
            if(err){
                res.status(404).json({
                    message : err.message,
                    data : []
                })
            }else{
                res.status(200).json({
                    message : 'image successfully removed',
                    data : image
                })
            }
        })
    },
    getImageThumbnails : (req,res,next)=>{
        TradeModel.findById(req.body.tradeId,(err,trade)=>{
            if(err){
                res.status(404).json({
                    message : err.message,
                    data : []
                })
            }else{
                
            }
        })
    }
}