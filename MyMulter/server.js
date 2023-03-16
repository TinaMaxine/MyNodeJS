const express = require('express');
const app = express();


const multer = require("multer");
// app.get("/test", (req,res) => {
//     res.send("server is running perfectly fine")
// })
//multer is a library


// storage management in multer
// tell multer where will bbe the destination we want to store our file.

const storageofMulter = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null,"./public")
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
})

const uploadfile = multer({ storage:storageofMulter }).single('sample');

app.use('/public/', express.static(__dirname+'/public/'));  // homework

app.post("/", (req, res) => {
    uploadfile(req, res, (err) => {
        if (err) {
            console.log(err.message);
        }
        return res.send(req.file)
    })
})

app.listen(5000, () => {
    console.log("server is running");
})