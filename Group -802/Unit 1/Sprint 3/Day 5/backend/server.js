 const express  = require('express')
 const connectToMongoDB = require('./configs/connection.config')
 const todoRouter = require('./routes/todo.route')
 const cors = require('cors')


 const server = express()
 server.use(express.json())
 server.use(cors())

 //connecting to mongodb
 connectToMongoDB()


 server.use("/todos", todoRouter)


 server.listen(8000, ()=>{
    console.log(`Server has started on http://localhost:8000/`)
 })