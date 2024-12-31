const { getCartRepository } = require('../repositories/cartRepository');
const { getOrderRepository } = require('../repositories/orderRepository');

const createOrder = async (userId) => {
  if (!userId) {
    console.error('userId is required');
    throw new Error('userId is required');
  }
  const cartRepo = getCartRepository();
  const orderRepo = getOrderRepository();

  const cartItems = await cartRepo.find({ where: { user: { id: userId } }, relations: ['product'] });

  if (cartItems.length === 0) {
    console.error('Cart is empty');
    throw new Error('Cart is empty');
  }

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const newOrder = orderRepo.create({
    user: { id: userId },
    items: cartItems,
    total,
  });

  await orderRepo.save(newOrder);
  await cartRepo.delete({ user: { id: userId } });

  return newOrder;
};

module.exports = { createOrder };