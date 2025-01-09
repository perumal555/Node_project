const  UserModel = require('../models/UserModel')
const {body} = require("express-validator")

exports.insert = [
    body("username").trim().isLength({ min: 5 }).withMessage("username cannot be empty"),
    body("email").trim().isEmail().withMessage("give a proper email address "),
    body("username").trim().custom((value) => {
        return UserModel.findOne({ username: value })
            .then((user) => {
                if (user!= null) {
                    return Promise.reject("username already exists")
                }
            })
    })
    // body("contacts").trim().custom((value) => {
    //     return UserModel.findOne({ contacts: value })
    //         .then((contact) => {
    //             if (contact!= null) {
    //                 return Promise.reject("contact already exists")
    //             }
    //         })
    // })
]