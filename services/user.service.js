const userRepository = require('../repositories/user.repository');
const utils = require('../utils');

async function createUser(username, password) {
  const passwordHash = utils.generateHash(password);
  let newUser;
  try {
    newUser = await userRepository.create({ username, passwordHash });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new utils.BadRequestError('User already exists');
    }
    throw error;
  }
  return newUser.id;
}

async function getUserByUsername(username) {
  return userRepository.findOne({ where: { username } });
}

module.exports = { createUser, getUserByUsername };
