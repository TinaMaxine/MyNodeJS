const Book = require('../models/books');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.createBook = async (req, res) => {
  const { title, author, isbn } = req.body;
  const book = new Book({ title, author, isbn });
  try {
    const result = await book.save();
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
