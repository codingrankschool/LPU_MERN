const express = require('express')
const connectToMongoDB = require('./configs/connection.config')
require('dotenv').config()

const userRouter = require("./routes/user.route")

const PORT = process.env.PORT || 8080


const server = express()
server.use(express.json())

//connecting to mongodb
connectToMongoDB()

server.use("/users/auth", userRouter)

server.listen(PORT, ()=>{
    console.log(`Server has started on http://localhost:${PORT}`)
})