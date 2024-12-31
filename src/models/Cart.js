const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Cart',
  tableName: 'cart',
  columns: {
    id: { type: 'int', primary: true, generated: true },
    quantity: { type: 'int' },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: { name: 'userId' },
    },
    product: {
      type: 'many-to-one',
      target: 'Product',
      joinColumn: { name: 'productId' },
    },
  },
});
