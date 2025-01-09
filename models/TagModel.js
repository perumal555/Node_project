const mongooose = require("mongoose")

const TagSchema = new mongooose.Schema({
    text:{type:String, required:true},
    code:{type:String, required:true}
},{timestamps:true})

const TagModel = mongooose.model("tag", TagSchema)

module.exports = TagModel