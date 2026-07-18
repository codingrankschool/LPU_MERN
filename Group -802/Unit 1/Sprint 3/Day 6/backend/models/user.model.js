const mongoose = require('mongoose')

let userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }

}, {versionKey:false, timestamps:true})

// let User = mongoose.model('User', userSchema)
// module.exports = User

module.exports = mongoose.model('User', userSchema)