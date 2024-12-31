const orderService = require('../services/orderService');

const processOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body.userId);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error processing order', error });
  }
};

module.exports = { processOrder };
