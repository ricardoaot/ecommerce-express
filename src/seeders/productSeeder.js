const { getProductRepository } = require('../repositories/productRepository');

const seedProducts = async () => {
  
  const productRepo = getProductRepository();

  const productCount = await productRepo.count();

  if (productCount === 0) {
    const products = [
      { name: 'Product 1', price: 10.0, description: 'Description for product 1' },
      { name: 'Product 2', price: 20.0, description: 'Description for product 2' },
      { name: 'Product 3', price: 30.0, description: 'Description for product 3' },
    ];

    for (const product of products) {
      const newProduct = productRepo.create(product);
      await productRepo.save(newProduct);
    }

    console.log('Seeded 3 products');
  } else {
    console.log('Products table is not empty, no seeding performed');
  }
  
};

module.exports = { seedProducts };