const express = require("express")
const app = express()

require("dotenv").config()

const userModel = require("./models/user.model")

const mongodbConnect = require("./database/mongo")

mongodbConnect()

// app.use(express.json())
app.post("*",express.json())
app.patch("*",express.json())
app.put("*",express.json())

app.post("/",async(req,res)=>{})

app.get("/all",async (req,res)=>{
    const data = await userModel.find({})
    console.log("user")
    res.status(200).json({users:data})
})

const port = process.env.PORT 
app.listen(port,()=> console.log("server is running on port", port))