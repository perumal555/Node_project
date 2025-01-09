const UserModel = require("../models/UserModel")
const AddressModel = require("../models/AdderssModel")
const ContactModel = require("../models/ContactModel")
const { body, validationResult } = require("express-validator")
const UserValidators = require("../validators/UserValidators")

 exports.insert = [
    UserValidators.insert,
    (req, res) => {
        const error = validationResult(req)
        // console.log(error.array())
        if (error.isEmpty()) {
            const User = new UserModel({
                username: req.body.username,
                email: req.body.email,
                contact: req.body.contact,
                password: req.body.password
            })
            User.save()
                .then((savedUser) => {
                    res.send(savedUser)
                })
                .catch((err) => {
                    res.send(err)
                })
            // res.send("success")
        } else {
            res.send(error.array())
        }

        // const User = new UserModel({
        //     username: req.body.username,
        //     email: req.body.email,
        //     contact: req.body.contact,
        //     password: req.body.password
        // })
        // User.save()
        //     .then((savedUser) => {
        //         res.send(savedUser)
        //     })
        //     .catch((err) => {
        //         res.send(err)
        //     })

    }]
// ------------------------------------------------------------>

exports.insertWithContact = [async (req, res) => {
    const rContacts = req.body.contacts

    let savedContactId = []
    // rContacts.map((e)=>{
    for (let i = 0; i < rContacts.length; i++) {
        const e = rContacts[i]
        const contact = new ContactModel({
            data: e.data,
            type: e.type
        })
        await contact.save()
            .then((savedContact) => {
                savedContactId.push(savedContact._id)
            })
    }
    const User = new UserModel({
        username: req.body.username,
        contacts: savedContactId,
        password: req.body.password
    })
    User.save()
        .then((savedUser) => {
            res.send(savedUser)
        })
        .catch((err) => {
            res.send(err)
        })
}]

// --------------------------------------------------------------------->

exports.insertWithAddress = [(req, res) => {
    const address = new AddressModel({
        plotNo: req.body.address.plotNo,
        street: req.body.address.street,
        city: req.body.address.city,
        landmark: req.body.address.landmark,
        pincode: req.body.address.pincode,
        state: req.body.address.state,
        country: req.body.address.country


    })
    // let savedAddress = null
    address.save()
        .then((savedAddress) => {
            const User = new UserModel({
                username: req.body.username,
                email: req.body.email,
                contact: req.body.contact,
                password: req.body.password,
                address: savedAddress._id

            })
            User.save()
                .then((savedUser) => {
                    res.send(savedUser)
                })
                .catch((err) => {
                    res.send(err)
                })

        })

}]

// --------------------------------------------------------------------->

exports.listpage = [(req, res)=>{
    let page = paraseInt(req.query.page) || 1;
    const perPage = 2;
    const skip = page > 1 ? (page - 1) * perPage : 0;
    const limit =perPage;
    UserModel,find().skip(skip).limit(limit)
    .then((users)=>{
        res.send(users)
    })
}]

// ---------------------------------------------------------------------->

exports.list = [(req, res) => {
    UserModel.find()    //returns multiple objects as an array
    UserModel.find().populate("address")
        .then((users) => {
            res.send(users)
        })
        .catch((err) => {
            res.send(err)
        })

}]

// -------------------------------------------------------------------------->

exports.login = [(req, res) => {
    UserModel.findOne({
        username: req.body.username,
        password: req.body.password
    })
        .then((user) => {
            user ? res.send(true) : res.send(false)
            //   let userFound = false
            //   if(user)
            //     {
            //      userFound = true  
            //     }
            // res.send(userFound)
        })
        .catch((err) => {
            res.send(err)
        })
}]

// ------------------------------------------------------------------>

exports.delete = [(req, res) => {
    UserModel.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })

}]

