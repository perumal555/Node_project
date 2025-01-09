const PostModel = require("../models/PostModel")
const multer =  require('multer')
const path = require('path')

const Storage = multer.diskStorage({
    distination:function(req, file, cb){
        cb(null, './public/uplod')
    },
    filaname:function(req, file, cb){
        cb(null, Data.now())
    }
}) 

exports.insert = [(req, res)=>{
    const post = new PostModel({
        title:req.body.title,
        code:req.body.code,
        image:req.body.image,
        tag:req.body
    })

}]