const express = require('express');
const indexRouter = express.Router();

const productRoutes = require('./productRoutes');
const cartRoutes = require('./cartRoutes');
const orderRoutes = require('./orderRoutes');
const userRoutes = require('./userRoutes');

indexRouter.use('/products', productRoutes);
indexRouter.use('/carts', cartRoutes);
indexRouter.use('/orders', orderRoutes);
indexRouter.use('/users', userRoutes);

module.exports = indexRouter;