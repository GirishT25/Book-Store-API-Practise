const express = require('express');
const router = express.Router();
const {getAllbooks ,getSingleBook ,addBook , updateBook ,deleteBook} =  require('../controllers/book-controller.js');


router.get('/get', getAllbooks);
router.get('/getId/:id', getSingleBook);
router.post('/addBook' ,addBook)
router.put('/update/:id' , updateBook );
router.delete('/delete/:id' , deleteBook);


module.exports = router;
