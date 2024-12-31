const { getCartRepository } = require('../repositories/cartRepository');

const addItem = async ({ userId, productId, quantity }) => {
  const cartRepo = getCartRepository();
  const newCartItem = cartRepo.create({
    user: { id: userId }, 
    product: { id: productId }, 
    quantity 
  });
  return cartRepo.save(newCartItem);
};

const removeItem = async (cartId) => {
  const cartRepo = getCartRepository();
  return cartRepo.delete(cartId);
};

module.exports = { addItem, removeItem };