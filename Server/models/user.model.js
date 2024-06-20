const mongoose = require('mongoose');


const userSchmas= mongoose.Schema({
    firstname: { type:String, required:true },
    lastname: { type:String, required:true },
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
 })
 
 const userSample = mongoose.model("signUp",userSchmas)

 module.exports = userSample