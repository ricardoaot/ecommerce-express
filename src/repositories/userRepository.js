const AppDataSource = require('../utils/db');

const getUserRepository = () => {
  return AppDataSource.getRepository('User');
};

module.exports = { getUserRepository };