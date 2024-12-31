const AppDataSource = require('../utils/db');

const getOrderRepository = () => {
  return AppDataSource.getRepository('Order');
};

module.exports = { getOrderRepository };