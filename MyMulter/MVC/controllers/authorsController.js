const Author = require('../models/authors');

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).send(authors);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.createAuthor = async (req, res) => {
  const { name, email, bio } = req.body;
  const author = new Author({ name, email, bio });
  try {
    const result = await author.save();
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
