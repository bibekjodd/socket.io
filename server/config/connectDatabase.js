const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`database connetion established...`)
    } catch (error) {
        console.log(`Error connecting database: ${error.message}`)
        process.exit();
    }
}

module.exports = connectDB