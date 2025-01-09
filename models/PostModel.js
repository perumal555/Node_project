const PostModel =require("mongooose")
const { default: mongoose, model } = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:{type:String, required:true},
    content:{type:String, required:true},
    image:{type:String},
    tag:[
        {

        }
    ]

}, {timestamps:true})

const PostModel = mongoose.model("post",PostSchema)
module.exports = PostModel