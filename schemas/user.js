const mongoose = require('mongoose')

const { Schema} = mongoose;
const userSchema = new Schema({
  name : {
    type : String,
    required : true,
    unique : true
  },
  age : {
    type : Number,
    required : true
  },
  married : {
    type : Boolean,
    required : true
  },
  comment : String, // 타입만 필요하면 바로 적어주기 
  created_At : {
    type : Date,
    default : Date.now
  } 
})

module.exports = mongoose.model('User',userSchema)