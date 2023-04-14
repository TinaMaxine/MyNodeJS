const Product = require('../models/products');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const product = new Product({ name, description, price });
  try {
    const result = await product.save();
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
