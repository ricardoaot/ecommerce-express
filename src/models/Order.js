const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Order',
  tableName: 'orders',
  columns: {
    id: { type: 'int', primary: true, generated: true },
    total: { type: 'decimal' },
    createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: { name: 'userId' },
    },
  },
});
