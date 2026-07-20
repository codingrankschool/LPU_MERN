const mongoose = require('mongoose')
require('dotenv').config()

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log(`Successfully connected to mongodb local server`)
    } catch (error) {
        console.log(`Something went wrong while connecting to mongodb server, Error ${error}`)
    }
}

module.exports = connectToMongoDB