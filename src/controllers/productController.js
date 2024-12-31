const productService = require('../services/productService');

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await productService.addProduct(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
};
module.exports = { getProducts, addProduct };
