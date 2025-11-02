const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
         mongoose.connect("mongodb://localhost:27017/Book-Store");
         console.log("MongoDB database connect Successfully");

    } catch (error) {
        console.log("MongoDB connection failed" , error);
        process.exit(1);    
    }
}

module.exports = connectDB;
