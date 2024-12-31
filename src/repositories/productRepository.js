const AppDataSource = require('../utils/db');

const getProductRepository = () => {
  return AppDataSource.getRepository('Product');
};

module.exports = { getProductRepository };