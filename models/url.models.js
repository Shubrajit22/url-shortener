const mongoose=require('mongoose');

const urlSchema = new mongoose.Schema({
   shortId:{
    type:String,
    required:true,
    unique:true,
   },
   requiredUrl:{
    type:String,
    required:true,
   },
   visitedHistory:[{timestamps:{type:Number}}],
},

   {timestamps:true}
);

const URL = mongoose.model("url",urlSchema)
module.exports = URL;
