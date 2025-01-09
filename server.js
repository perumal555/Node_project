// console.log("server is running on port 3000");

// import the express library
const express = require("express");
// create an express app
// Initialize the express app
const app = express()
app.use(express.json())
app.use(express.urlencoded())
// cofigure the express app
app.get("/smile", (req,res)=>{
    res.send("cute smile")
})
app.get("/hello",(req, res)=>{
    res.send(""+ Math.random())
})
app.post("/num",(req, res)=>{
    res.send(""+ Math.random())
})
app.get("/name",(req, res)=>{
    const user ={
        name : "cute smile",
        age : 21,
        address : "virudhunagar"
    }
    res.send(user)
})
// app.get("/login", (req, res)=>{
//     const username = req.query.username
//     const password = req.query.password
//     console.log(username, password)
//     if(username === "admin" && password === "1234")
//         {
//         res.send("login success")
//     }
//     res.send("login failed")
// })
app.post("/login", (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    console.log(username, password)
    if(username === "admin" && password === "1234")
        {
        res.send("login success")
    }
    res.send("login failed")
})
const users=[
    {
    "name":"perumal",
    "age":"22"
    },
    {
        "name":"Apshar",
        "age":"22"
    },
    {
        "name":"siva",
        "age":"23"
    }
]
app.get("/arr/:id",(req,res)=>{
    const id = req.params.id;
    res.send(users[id])
})

// make the server to watch the port
app.listen("3000",()=>{
    console.log("server is running on port 3000");
})

/* 
http methods
GET  ==> 
POST
PUT
DELETE
PATCH
OPTIONS
*/