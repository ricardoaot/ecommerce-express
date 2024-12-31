const { getProductRepository } = require('../repositories/productRepository');

const getAllProducts = async () => {
  const productRepo = getProductRepository();
  return productRepo.find();
};

const addProduct = async ({ 
    name,
    price,
    stock,
    description
}) => {
  const productRepo = getProductRepository();
  const newProduct = productRepo.create({
    name,
    price,
    stock,
    description,
  });
  return productRepo.save(newProduct);
};

module.exports = { getAllProducts, addProduct };
