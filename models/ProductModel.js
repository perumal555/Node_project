const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name : {type:String, requried: true},
    desc:  {type:String},
    price: {type:String, requried:true},
    image: {type:String}
},{timestamps:true})

const ProductModel = mongoose.model("product", ProductSchema)

module.exports = ProductModel
