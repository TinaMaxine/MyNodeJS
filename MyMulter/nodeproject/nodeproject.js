//create a backend app;
// /register  : post : username,email and password from client :-postman
// store it in array:
// let database =[
//     {
//         username:"snehal",
//         email:"xyz@gmail.com",
//         password:"asasas"
//     }
// ]
// make sure two identical creadentials : check with email.
// you have encrypt the password and than store it.
// https://www.npmjs.com/package/bcrypt


// /login  :post : check email and password  :brcypt to compare

const express = require("express");
const app = express();
app.use(express.json());

const usersCreds=[
    {
        username:"anjani",
        email:"anjani@gmail.com",
        password:"okgo1234"
    }
    // ,
    // {
    //     username:"dev",
    //     email:"dev@gmail.com",
    //     password:"okgo12345"

    // }
]
const bcrypt=require("bcrypt");
const saltRounds = 10;
app.listen(2000,()=>{console.log("Hey server is running on port: 2000");})
app.post("/register",(req,res)=>{
    const newUser=req.body;

    const existingEmail=usersCreds.find(function(user){
        return user.email===newUser.email
    })
    if(existingEmail){
        
        return res.status(400).send("Email already exists");
    }
    else{
        var newUserpassword=req.body.password;

            bcrypt.hash(newUserpassword, saltRounds)
            .then(function(hash) {
              // Store the hash in your password database.
              console.log("Hashed password:", hash);
              newUser.password=hash;
              usersCreds.push(newUser);
                console.log(newUser);
                res.send("registered successfully")
                console.log("array of users",usersCreds);
            })
            .catch(function(err) {
              console.log(err);
            });
            
        
}})

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = usersCreds.find((user) => user.username === username);
    if (!user) {
      return res.status(401).send("Invalid username or password");
    }
    bcrypt
      .compare(password, user.password)
      .then((result) => {
        if (result) {
          res.send("Login successful");
        } else {
          res.status(401).send("Invalid username or password");
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("An error occurred while trying to login");
      });
  });
  

