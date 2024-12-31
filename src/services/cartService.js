const { getCartRepository } = require('../repositories/cartRepository');

const addItem = async ({ userId, productId, quantity }) => {
    const cartRepo = getCartRepository();
    
    let cartItem = await cartRepo.findOne({ where: { user: { id: userId }, product: { id: productId } } });

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cartItem = cartRepo.create({
            user: { id: userId },
            product: { id: productId },
            quantity
        });
    }

    await cartRepo.save(cartItem);
    return listCartItems(userId);
};

const removeItem = async (cartId) => {
    const cartRepo = getCartRepository();
    return cartRepo.delete(cartId);
};

const listCartItems = async ({ userId }) => {
    const cartRepo = getCartRepository();
    const cartItems = await cartRepo.find({ where: { user: { id: userId } }, relations: ['product'] });

    return cartItems.map(item => ({
        cartId: item.id,
        productName: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
    }));
};
module.exports = { addItem, removeItem, listCartItems };