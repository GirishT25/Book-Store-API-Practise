# 📚 Book Store REST API

A simple RESTful API for managing books in a Book Store.  
This project demonstrates how to perform **CRUD (Create, Read, Update, Delete)** operations using **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

- Add new books 📖  
- Retrieve all books or a specific book 🔍  
- Update existing book details ✏️  
- Delete books 🗑️  
- Uses MongoDB for data storage 💾  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (with Mongoose ODM)  
- **Environment:** REST API (JSON-based communication)  

---

## 📂 Project Structure
Book-Store/
│
├── models/
│ └── Book.js # Mongoose schema and model for books
|
│__ controllers
| |__Book_controller.js
|
├── routes/
│ └── bookRoutes.js # Routes for book CRUD operations
│
├── server.js # Main entry point of the application
├── package.json # Project dependencies and scripts
└── README.md # Documentation

