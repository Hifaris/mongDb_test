const express = require("express")
const app = express()

require("dotenv").config()

const userModel = require("./models/user.model")

const mongodbConnect = require("./database/mongo")

const {mongodb} = require("./models/mongo.model")

mongodbConnect()

app.use(express.json())
// app.post("*",express.json())
// app.patch("*",express.json())
// app.put("*",express.json())

app.post("/",async(req,res)=>{
    const {name,age} = req.body
    await mongodb.user.create({name,age})
    res.status(200).send("create")
})

app.get("/all",async (req,res)=>{
    const data = await mongodb.user.find({})
    console.log("user")
    res.status(200).json({users:data})
})

app.patch("/:id",async(req,res)=>{
    const {id}= req.params
    const {name}=req.body
    const user = await mongodb.user.updateOne({_id: id}, {name})
    res.status(200).json({data: user})
})

app.delete("/:id",async (req,res)=>{
    const {id}= req.params
    await mongodb.user.deleteOne({_id:id})
    res.status(200).send("delete")
})

const port = process.env.PORT 
app.listen(port,()=> console.log("server is running on port", port))