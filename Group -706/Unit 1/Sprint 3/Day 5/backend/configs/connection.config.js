const mongoose = require('mongoose')
require('dotenv').config


let connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONOGDB_URL)
        console.log("Connected to MongoDB Local Server!")
    } catch (error) {
        
    }
}

module.exports = connectToMongoDB