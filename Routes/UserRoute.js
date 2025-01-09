const express = require("express")
const router = express.Router()

const UserController = require("../controllers/UserController")

router.get("/user/list", UserController.list)
router.post("/user/insert", UserController.insert)
router.post("/user/insertWithAddress", UserController.insertWithAddress)
router.post("/user/login",UserController.login)
router.delete("/user/delete/:id", UserController.delete)
router.post("/user/insertWithContact", UserController.insertWithContact)
module.exports = router 