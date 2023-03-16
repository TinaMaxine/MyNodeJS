// Create a server using Expressjs and Nodejs , which will be responsible for handling the file being uploaded from the client side.

// The file being uploaded will be in the form of form-data and that needs to be downloaded and stored at server-side .This task can be achieved using a multer library .

// The task focuses on uploading a single file at a time.


const express = require('express');
const multer = require('multer');

// setting up the server
const app = express();
const port = 3000;

// setting up storage for uploaded files
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

// setting up file upload middleware
const upload = multer({storage: storage});

// defining server route for file uploads
app.post('/upload', upload.single('myfile'), (req, res) => {
  console.log(req.file); // logging uploaded file information
  res.send('File Uploaded!');
});

// start the server
app.listen(port, () => console.log(`Server listening on port ${port}!`));
