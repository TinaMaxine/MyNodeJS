const express = require("express");
const app = express();

app.use(express.json());

const fs = require("fs");

app.get("/products", (req, res) => {
  fs.readFile("FileOperations/data.json", 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
    res.send(data);
  });
});

app.post("/appendData", (req, res) => {
    fs.readFile("FileOperations/data.json", "utf8", (err, data) => {
        if (err) {
          console.log("error");
        } else {
          console.log("dbehf",data);
        }
        // res.send(data);
        let products=JSON.parse(data);
        console.log(products);
        const myDataArray=req.body;
        console.log(myDataArray);
        myDataArray.forEach(element => {
            
            let id=products.length+1;
            let newData={
                id:id,
                ...element
            }
            products.push(newData);
            
        });
        
        //added id as the last key-value pair
        // let newData = req.body;
        // newData.id=id;

        //but i need it as the first key value pair

        // let newData = {
        //     id: id,
        //     ...req.body
        //   };
        // products.push(newData);
        // productsString=JSON.stringify;
        var jsonContent = JSON.stringify(products);
        console.log("hvjevhjev",jsonContent);
        fs.writeFile("FileOperations/data.json", jsonContent, (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "json" });
            res.send("File not found");
          } else {
            res.writeHead(200, { "Content-Type": "json" });
            res.send(data);
          }
        });
      });

      });


  // stringify JSON Object
//   var jsonContent = JSON.stringify(newData, null, 4);
//   console.log(jsonContent);
//   fs.appendFile("data.json", jsonContent, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "json" });
//       res.send("File not found");
//     } else {
//       res.writeHead(200, { "Content-Type": "json" });
//       res.send(data);
//     }
//   });
// });

app.get("/findproduct/:id", (req, res) => {
  fs.readFile("FileOperations/data.json", "utf8", (err, data) => {
    const products = JSON.parse(data);
    const productId = req.params.id;
    const product = products.find((p) => p.id === Number(productId));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });
});



// Step 1: get the array
// step 2: Get the max id
// Create the id
// Push the object
// write file the array

// fs.appendFile(filepath,' -> and this is new text appended',(err)=>{
//     if(!err) console.log('file is updated');
// })
// server.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });

// fs.open("file name", "w", (err, file) => {
//     console.log(file);
//   });

//   fs.readFile("filename", (err, data) => {
//     if (err) {
//       console.log("there is a error");
//     } else {
//       console.log(data);
//     }
//   });

//   fs.appendFile("filename", "content", (err) => {
//     if (err) {
//       console.log("there is an error");
//     }
//   });

//   fs.writeFile("filename", "content", (err) => {
//     if (err) {
//       console.log("there is an error");
//     }
//   });

app.listen(1000, () => console.log("Server started on port 1000"));