const express = require('express')
const cors = require('cors')
const connectToMongoDB = require('./configs/connection.config')
const todoRouter = require("./routes/todo.route")

const server = express()

server.use(express.json())
server.use(cors())


//Connecting to MongoDB
connectToMongoDB()

server.use("/todos", todoRouter)

server.listen(8000, ()=>{
    console.log(`Server is running on http://localhost:8000/`)
})
