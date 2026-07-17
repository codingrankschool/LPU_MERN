const { request } = require('express')
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    priority:{
        type:String,
        required:true
    },
    user: {
        type:String,
        required:true
    }
}, {versionKey:false, timestamps:true})

const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo