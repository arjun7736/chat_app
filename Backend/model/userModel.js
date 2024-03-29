import mongoose, { Schema } from "mongoose";


const userSchema =new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    } ,
    phone:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const  User=mongoose.model("user",userSchema) 
export default User;