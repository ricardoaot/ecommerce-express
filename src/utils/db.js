const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [
    require('../models/Product'),
    require('../models/User'),
    require('../models/Cart'),
    require('../models/Order'),
  ],
});

module.exports = AppDataSource;