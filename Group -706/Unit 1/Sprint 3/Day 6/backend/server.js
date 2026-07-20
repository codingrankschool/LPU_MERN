const express = require('express')
const connectToMongoDB  = require("./configs/connection.config")
require('dotenv').config()
const authRouter = require("./routes/auth.route")
const userRouter = require("./routes/user.route")

const PORT = process.env.PORT || 8080

const server = express()

//a middleware for json request and response
server.use(express.json())

//connecting to mongodb
connectToMongoDB()

server.use("/auth", authRouter)
server.use("/users", userRouter)

server.listen(PORT, ()=>{
    console.log(`Server has started on http://localhost:${PORT}`)
})
