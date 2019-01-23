const bookmodel = require('../models/book_model');

module.exports = {
  getAllBooks: (req,res,next)=>{
    let allbooklist = [];
    bookmodel.find({},(err,result)=>{
      if(err){
        next(err);
      }else{
        for(let book of result){
          allbooklist.push({id:result._id,name:result.name,author:result.author});
        }
        res.json({status:"success",message:"all books fetched successfuly",data:result});
      }
    });
  },
  addABook: (req,res,next)=>{
    bookmodel.create({name:req.body.name,author:req.body.author},(err,book)=>{
      if(err){
        next(err);
      }else{
        res.json({status:"success",message:"book added successfuly",data:{books:book}});
      }
    });
  }
};
