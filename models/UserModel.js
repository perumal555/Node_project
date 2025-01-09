const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username : {type:String, required:true},
    password : {type:String, required:true},
    // contact : {type:String},
    // email: {type:String, required:true},
    contacts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"contact"
        }
    ],
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"address"
    }

},{timestamps:true})

const UserModel = mongoose.model("users", UserSchema)


module.exports = UserModel
