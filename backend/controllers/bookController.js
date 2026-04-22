const Book = require("../models/Book");


// ADD BOOK
const addBook = async (req, res) => {
    try {
        const { title, author, category, quantity } = req.body;

        const book = await Book.create({
            title,
            author,
            category,
            quantity
        });

        res.status(201).json({
            message: "Book Added Successfully",
            book
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET ALL BOOKS
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE BOOK
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    addBook,
    getBooks,
    deleteBook
};