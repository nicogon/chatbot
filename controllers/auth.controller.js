const expressify = require('expressify')();
const utils = require('../utils');
const authService = require('../services/auth.service');

/**
 * Login allows the user to authenticate with credentials
 * and get a token to use on secured endpoints.
 */

async function login(req, res) {
  const { username, password } = req.body;
  const { id, token } = await authService.login(username, password);
  if (!id) {
    throw new utils.UnauthorizedError('Bad username or password');
  }
  res.send({ token, id }, 200);
}

// Expressify is a lib that handles promise rejections to express
module.exports = expressify({ login });
