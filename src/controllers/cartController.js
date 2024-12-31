const cartService = require('../services/cartService');

const addToCart = async (req, res) => {
    try {
        const cartItem = await cartService.addItem(req.body);
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error });
    }
};

const listCartItems = async (req, res) => {
    try {
        const cartItems = await cartService.listCartItems(req.body);
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart items', error });
    }
};

const removeFromCart = async (req, res) => {
    try {
        await cartService.removeItem(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error removing from cart', error });
    }
};

module.exports = { addToCart, removeFromCart, listCartItems };
