require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./database/db.js'); 
const bookRoutes = require('./routes/book-routes.js')


const PORT = process.env.PORT || 3000;
 // connected to the Database
connectDB();

// middleware 
app.use(express.json());
 
app.get('/' , (req , res)=>{
    res.send("Hello World");
})


// routes 
app.use('/api/book' ,bookRoutes);

app.listen(PORT , ()=>{
    console.log(`Server is running on the ${PORT}`);
})