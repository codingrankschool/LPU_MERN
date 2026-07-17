const mongoose = require('mongoose')


let connectToMongoDB = async()=>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/tododb`)
        console.log("Connected to MongoDB Local Server!")
    } catch (error) {
        
    }
}

module.exports = connectToMongoDB