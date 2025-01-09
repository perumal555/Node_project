const express = require("express")
const router = express.Router()

const PostController = require("../controllers/PostController")

router.get("/post/list", PostController.insert)
router.post("/post/list", PostController.list)

module.exports = router