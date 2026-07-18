const express = require('express')
const cors = require('cors')
const connectToMongoDB = require('./configs/connection.config')
const todoRouter = require("./routes/todo.route")
const authRouter = require("./routes/auth.route")
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true
    })
);


//Connecting to MongoDB
connectToMongoDB()

server.use("/todos", todoRouter)
server.use("/auth", authRouter)

server.listen(8000, ()=>{
    console.log(`Server is running on http://localhost:8000/`)
})
