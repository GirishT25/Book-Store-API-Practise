const Book = require('../models/Book.js')


const getAllbooks = async (req ,res)=>{
 try {
    const allBooks = await Book.find({});
    if(allBooks?.length > 0 ){
        res.status(200).json({
            data : allBooks,
            message : "all books fetched",
            sucess : true
        })
    }else{
        res.status(404).json({
            message : "Books are not available",
            sucess : false
        })
    }
 } catch (error) {
    console.log("Error occure due to getAllBooks",error);
    res.status(500).json({
        message: "Something went Wrong",
        sucess : false
    })
 }
}

const getSingleBook = async (req, res)=>{
    try {
        const bookId = req.params.id;   
        const OurBook = await Book.findById(bookId);
        if(!OurBook){
            res.status(404).json({
                message : "Book not found try with the another id",
                success : false
            })
        }
        res.status(200).json({
            data : OurBook,
            message : "Book Found",
            success : true
        })
     } catch (error) {
        console.log(error);
        res.status(500).json({
        message: "Something went Wrong",
        success : false
    })  
    }

}

const addBook = async (req ,res)=>{

    try {
        const newBookcreation = req.body;
        const newBookaddToDB = await Book.create(newBookcreation);
        if(newBookaddToDB){
                res.status(200).json({
                    message : "New Book added successfully",
                    sucess : true,
                    data : newBookaddToDB,    
                })
        }
    } catch (error) {
        console.log("Error in adding the Book", error);
            res.status(500).json({
        message: "Something went Wrong",
        sucess : false
    })
    }

}
const updateBook = async (req ,res)=>{
try {
    const BookID = req.params.id;
    const updatedBookData =  req.body;
    const UpdateBook = await Book.findByIdAndUpdate(BookID, updatedBookData , {new  : true}) 
    if(!UpdateBook){
        res.status(404).json({
            message:"Book ID is not found",
            success : false
        })
    }  
    res.status(200).json({
        message : "Book Updated SuccessFully",
        data  : UpdateBook
    })
} catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Something went Wrong",
        sucess : false
    })
}
}

const deleteBook = async(req ,res)=>{
try {
    const currentBookId = req.params.id
    const DeleteBookId = await Book.findByIdAndDelete(currentBookId);
    if(!DeleteBookId){
        res.status(404).json({
            message : "Book not found try with another id",
            success : false
        })
    }
    res.status(200).json({
        message : `Book of the id ${currentBookId} is deleted`,
        data : DeleteBookId,
        success : true
    })
} catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Something went Wrong",
        sucess : false
    })
}
}


module.exports = {getAllbooks , getSingleBook , addBook , updateBook , deleteBook};
