const express = require('express');
const {processOrder} = require('../controllers/orderController');
const router = express.Router();

router.post('/', processOrder);

module.exports = router;
