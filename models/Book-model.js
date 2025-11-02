const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name : {
        type : String,
        required  : [true  , "Book title is required"],
        trim : true,
        maxLength : [50 , "Book title cannot be more than 100 characters"]
    },
    author : {
        type : String,
        required  : [true  , "Book title is required"],
        trim : true,
        maxLength : [50 , "Book title cannot be more than 100 characters"]
    },
    year : {
        type : Number ,
        required : [true , "Publication Year is Required"],
        min : [1000 , "Year should be at least 1000"],
        max : [new Date().getFullYear(), "Year cannot be in Future"],
    },
    createdAt : {
        type : Date ,
        default :  Date.now
    }
});

module.exports = mongoose.model("Books" , BookSchema);
