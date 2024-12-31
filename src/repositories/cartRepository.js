const AppDataSource = require('../utils/db');

const getCartRepository = () => {
  return AppDataSource.getRepository('Cart');
};

module.exports = { getCartRepository };