const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")
app.use(express.json())



const MONGODB_URL = "mongodb://localhost:27017/users"

mongoose.connect(MONGODB_URL)
   .then(()=>{
    console.log(`${MONGODB_URL} connected`)
   })
   .catch((err)=>{
    console.error("error",err.message)
   })
   
// const UserController = require("./controllers/UserController")

// const router = express.Router()
// router.get("/user/list", UserController.list)
// router.post("/user/list", UserController.list)  
// app.use(router)


// const cors= require("mongoose")
// app.use(express.json)

// app.post("/user/insert",UserController.insert)
// app.get("/user/list",UserController.list)

app.use(require("./Routes/UserRoute"))
app.use(require("./Routes/ProductRoute"))
// app.use(require("Routes/TagRouter"))

app.use ("/files", express.static(__dirname + "/public/upload"))

const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
   destination: function (req, file, cb){
      cb(null, './public/upload/')

   },
   filename: function(req, file, cb){
      cb(null, Date.now() + path.extname(file.originalname))
   }
})

const uploader = multer({storage: storage});

app.post('/upload/single', uploader.single('upload_file'), function(req, res){
   console.log(req.file, req.body)
   res.status(200).send("file upload success....!")
});

app.post('/upload/multiple', uploader.array('upload_file',10), (req, res)=>{
   console.log(req.files)
   return res.send("multiple file upload success....!")
});

// app.use(require(""))
// app.use(require("./Routes/UserRoute"))

app.listen(8081,()=>{
   console.log("server listening on port 8081")
})