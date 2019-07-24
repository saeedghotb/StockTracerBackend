const TradeModel = require('../../models/TradeModel');
const ImageActions = require('../../../Helpers/SaveImage');

module.exports = {
    addImage : (req,res,err)=>{
        const image = ImageActions.getImage(req.body.image)
        const randomImageName = Math.floor(Math.random()*98400000);
        require('fs').writeFile('./uploadimages/'+randomImageName+'.'+image.type.split('/')[1],image.data,(err,res)=>{
            
        })
        const imagedata = {
            image : randomImageName+"."+image.type.split('/')[1],
            description : req.body.description,
            tradeId : req.body.tradeId,
            save_date : req.body.date,
            due_date : req.body.due_date
        }
        TradeModel.findByIdAndUpdate(req.body.tradeId,{$push: {images:imagedata}},{new: true},(err,trade)=>{
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
    },
    getImage: (req,res,next)=>{
        
    }
}