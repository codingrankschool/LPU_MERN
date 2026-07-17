const mongoose = require('mongoose')

let todoSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    priority: {
        type:String,
        required:true
    },
    user: {
        type:String,
        required:true
    }

}, {versionKey:false, timestamps: true})

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo