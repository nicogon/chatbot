const userService = require('./user.service');
const utils = require('../utils');


function verifyPasswordHash(password, passwordHash) {
  return passwordHash === utils.generateHash(password);
}

async function login(username, password) {
  const user = await userService.getUserByUsername(username);

  if (!user || !verifyPasswordHash(password, user.passwordHash)) {
    throw new utils.UnauthorizedError('Wrong username or password');
  }
  const token = utils.tokenProvider.generate(user.id.toString());
  return { id: user.id, token };
}

function authorize(token, id) {
  // TODO: create a getUserById & validate la existence of that id before continue
  const isTokenValid = token === utils.tokenProvider.generate(id.toString());
  if (!isTokenValid) {
    throw new utils.UnauthorizedError('Wrong username or password');
  }
}

module.exports = {
  login,
  authorize,
};
