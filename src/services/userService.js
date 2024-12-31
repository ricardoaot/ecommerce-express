const { getUserRepository } = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const jose = require('jose');

const register = async ({ username, password }) => {
  const userRepo = getUserRepository();
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = userRepo.create({ username, password: hashedPassword });
  return userRepo.save(newUser);
};

const login = async ({ username, password }) => {
  const userRepo = getUserRepository();
  const user = await userRepo.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({ sub: user.id.toString() })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(jwtSecret);

  return token;
};

module.exports = { register, login };