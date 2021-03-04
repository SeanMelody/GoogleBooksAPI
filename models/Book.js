// Const for mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declare the Book Schema
const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: String,
    image: String,
    link: String,
});

// const for the mongoose Database
const Book = mongoose.model("Book", bookSchema);

// module.export it!
module.exports = Book;
