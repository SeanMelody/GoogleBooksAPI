const router = require("express").Router()

// dotenv const to hide API keys=
const dotenv = require('dotenv').config()
// Check for errors
if (dotenv.error) {
    throw dotenv.error
}
const APIKEY = dotenv.parsed.APIKEY
console.log(APIKEY)


// Test get request, sends back success
router.get("/seanisthebest", (req, res) => {
    res.send({ msg: "success" });
});


// Need GET /books to get all the saved books

// Need POST / books to save a book

// Need DELETE / books/:id to delete using _id

module.exports = router

