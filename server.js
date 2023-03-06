// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     total_quantity: 10,
//     type_of_product: "shirt",
//     price: 300,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     total_quantity: 20,
//     type_of_product: "shoes",
//     price: 500,
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     total_quantity: 15,
//     type_of_product: "pants",
//     price: 200,
//   },
// ];

// // Get all products
// app.get("/products", (req, res) => {
//   res.json(products);
// });

// // Get product by id
// app.get("/products/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const product = products.find((p) => p.id === id);
//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }
//   res.json(product);
// });

// // Get product by name
// app.get("/products/name/:name", (req, res) => {
//   const name = req.params.name;
//   const product = products.find((p) => p.name === name);
//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }
//   res.json(product);
// });

// // Add new product
// app.post("/addproduct", (req, res) => {
//   const newProduct = {
//     id: products.length + 1,
//     name: req.body.name,
//     total_quantity: req.body.total_quantity,
//     type_of_product: req.body.type_of_product,
//     price: req.body.price,
//   };
//   products.push(newProduct);
//   res.status(201).json({ message: "Product added", product: newProduct });
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log("Server running on port `${port}`");
// });



const express = require("express");
const app = express();

// Mock data
const products = [
  {
    id: 1,
    name: "Product1",
    total_quantity: 12,
    type_of_product: "shirt",
    price: 300,
  },
  {
    id: 2,
    name: "Product2",
    total_quantity: 5,
    type_of_product: "pants",
    price: 500,
  },
  // Add more products here
];
app.use(express.json());

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get product by id
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === Number(productId));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Get product by name
app.get("/products/name/:name", (req, res) => {
  const productName = req.params.name;
  const product = products.find((p) => p.name === productName);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Add product
app.post("/addproduct", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  //   res.json(newProduct);
  console.log(req.body);
  res.send(products);
});

// app.post("/removeproduct",(req,res)=>{
//     // const product_id=req.body;
//     products.pull();
//     res.send(products);
// })

// Start server
app.listen(3000, () => console.log("Server started on port 3000 mbjhhbhj"));