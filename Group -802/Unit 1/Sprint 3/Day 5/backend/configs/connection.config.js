const mongoose = require('mongoose')

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/tododb`)
        console.log("Connected to mongodb local server.")
    } catch (error) {
        console.log("Error While connecting to mongodb server")
        console.log(error)
    }
}

module.exports = connectToMongoDB