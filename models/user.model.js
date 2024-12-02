const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    age:{
       type: Number,
       require:true,
    }
},
{collection:"user",timestamps:true}
)

module.exports = mongoose.model("user",userModel)