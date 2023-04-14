// have to require dependencies 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');
const authorsRoutes = require('./routes/authorsRoutes');
const productsRoutes = require('./routes/productsRoutes');
const booksRoutes = require('./routes/booksRoutes');

// now we need to setup up server
const app = express();
const port = 3000;

// now connecting to database 
mongoose.connect('mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Project')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));


app.use(bodyParser.json()); // setting up middleware

// and defining routes here
app.use('/users', usersRoutes);
app.use('/authors', authorsRoutes);
app.use('/products', productsRoutes);
app.use('/books', booksRoutes);

// starting the server
app.listen(port, () => {
  console.log(`Server listening on nnjnj port ${port}`);
});
