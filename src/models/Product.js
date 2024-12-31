const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Product',
  tableName: 'products',
  columns: {
    id: { type: 'int', primary: true, generated: true },
    name: { type: 'varchar' },
    price: { type: 'decimal' },
    stock: { type: 'int' },
    description: { type: 'text' },
  },
});