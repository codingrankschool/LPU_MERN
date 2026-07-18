const mongoose = require('mongoose')
require('dotenv').config()


const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Successfully connectd to MongoDB Local Server")
    } catch (error) {
        console.log("Something went wrong while connecting to mongodb", error)
    }
}

module.exports = connectToMongoDB