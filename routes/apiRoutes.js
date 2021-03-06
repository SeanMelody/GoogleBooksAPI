// const axios = require("axios")
const router = require("express").Router()
const db = require("../models")

// GET /books to get all the saved books
router.get("/books", (req, res) => {
    db.Book.find({})
        .then(dbBook => {
            res.json(dbBook);
        })
        .catch(err => {
            res.json(err);
        })
});

// POST /books to send a saved book to the database
router.post("/books", (req, res) => {
    const savedBook = req.body
    db.Book.insertMany(savedBook)
        .then(dbBook => {
            console.log("Book Saved"),
                res.json(dbBook)
        })
        .catch(err => {
            res.json(err)
        })
})

// DELETE /books/:id by id for deleting a book from the database
router.delete("/books/:id", (req, res) => {
    console.log(req.params.id)
    db.Book.deleteOne({ "_id": req.params.id })
        .then(dbBook => {
            console.log("book deleted"),
                res.json(dbBook)
        })
        .catch(err => {
            res.json(err)
        })
})




// dotenv const to hide API keys=
// const dotenv = require('dotenv').config()
// // Check for errors
// if (dotenv.error) {
//     throw dotenv.error
// }
// const GoogleKEY = dotenv.parsed.GoogleKEY
// console.log(GoogleKEY)


// Test get request, sends back success
router.get("/test", (req, res) => {
    res.send({ msg: "success" });
});



module.exports = router

