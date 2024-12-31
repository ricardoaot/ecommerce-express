const express = require('express');
const { addToCart, removeFromCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/', addToCart);
router.delete('/:id', removeFromCart);

module.exports = router;
