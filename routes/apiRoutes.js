// const axios = require("axios")
const router = require("express").Router()

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

// App.put to search the GoogleBooks API Using .env
// router.get('/bookSearch', async (req, res) => {
//     // const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.body.stock}&apikey=${stockApiKey}`;
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.search}${GoogleKEY}`
//     //Async and await
//     try {
//         const books = await axios.get(url);
//         res.json(books.data);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send('Error Getting Books- Whoops');
//     }
// });




// Need GET /books to get all the saved books

// Need POST / books to save a book

// Need DELETE / books/:id to delete using _id

module.exports = router

