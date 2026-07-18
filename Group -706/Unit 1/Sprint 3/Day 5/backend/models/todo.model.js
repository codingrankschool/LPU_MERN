const mongoose = require('mongoose')

let todoSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    priority: {
        type:String,
        enum: ["Low", "Medium", "High"],
        default: "Medium"
    },
    completed:{
        type:Boolean,
        default:false
    }
    ,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

}, {versionKey:false, timestamps: true})

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo