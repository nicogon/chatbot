const utils = require('../utils');
const userService = require('../services/user.service');
const expressify = require('expressify')();


/**
 * Validates username & password
 */

function validateUsernameAndPassword(username, password) {
  // TODO validate with a regex, characters, longitude of the string, etc
  if (!username || !password) {
    throw new utils.BadRequestError(`Missing: ${
      !username ? 'username' : ''
    }${
      // TODO: refactor this horrible code
      // eslint-disable-next-line no-nested-ternary
      !password ? `${!username ? ' ' : ''}password` : ''
    }`);
  }
}

/**
 * Creates a user.
 */

async function createUser(req, res) {
  const { username, password } = req.body;
  validateUsernameAndPassword(username, password);
  const id = await userService.createUser(username, password);
  res.status(200).json({ id });
}

module.exports = expressify({ createUser });
