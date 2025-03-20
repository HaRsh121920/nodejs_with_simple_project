import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export const user = mongoose.model("user",userSchema);
