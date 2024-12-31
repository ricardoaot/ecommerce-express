const express = require('express');
const { addToCart, removeFromCart, listCartItems } = require('../controllers/cartController');
const router = express.Router();

router.get('/', listCartItems);
router.post('/', addToCart);
router.delete('/:id', removeFromCart);

module.exports = router;
