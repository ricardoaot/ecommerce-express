const { SignJWT, jwtVerify } = require('jose');
const bcrypt = require('bcrypt');

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

async function generateToken(payload) {
  return new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).sign(secret);
}

async function verifyToken(token) {
  return await jwtVerify(token, secret);
}

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

module.exports = { generateToken, verifyToken, hashPassword, comparePassword };
