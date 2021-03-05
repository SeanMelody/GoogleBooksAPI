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

// db.Book.insertOne(
//     {
//         title: 'Meow',
//         author: "Arya",
//         description: "I wanna Play",
//         image: "none",
//         link: "none"
//     }
// )

// var newBook = {
//     title: 'Meow',
//     author: "Arya",
//     description: "I wanna Play",
//     image: "none",
//     link: "none"
// };

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

router.delete("/books/:id", (req, res) => {

    db.Book.delete({})
        .then(dbBook => {
            console.log("new delete"),
                res.json(dbBook)
        })
        .catch(err => {
            res.json(err)
        })
})

// POST / books to save a book
// Post request to send the data to the database
// router.post("/books", (req, res) => {
//     db.Book.insert(newBook)
//         .then(dbBook => {
//             res.json(dbBook);
//         })
//         .catch(err => {
//             res.status(404).json(err);
//         });
// });

// Router.delete to delete a book
// router.delete("books/:id", (req, res) => {
//     // Set the condition
//     const condition = req.params.id
//     // Use the burger deleteone function
//     burger.deleteOne(condition, (res) => {
//         if (res.affectedRows === 0) {
//             return res.status(404).end();
//         }
//         res.status(200).end;
//     })
// })


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

// router.get("all", (req, res) => {
//     res.
// })

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

