const mongoose = require('mongoose')

let userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        trime:true
    },
    email:{
        type:String,
        required:true,
        trime:true
    },
    password:{
        type:String, 
        required:true
    },
    role:{
        type:String, 
        enum:["user", "student", "admin"],
        default: "user"
    },

}, {versionKey:false, timestamps:true})

// const User = mongoose.model('User', userSchema)
// module.exports = User

module.exports = mongoose.model('User', userSchema)