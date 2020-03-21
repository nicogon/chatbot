/* eslint-disable max-classes-per-file */
const crypto = require('crypto');

const tokenProvider = require('token');

tokenProvider.defaults.secret = 'inRealWordThisShouldBeAnEnvVariable';
tokenProvider.defaults.timeStep = 24 * 60 * 60;


function generateHash(stringToHash) {
  return crypto.createHash('sha256').update(stringToHash).digest('base64');
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

module.exports = {
  generateHash,
  BadRequestError,
  UnauthorizedError,
  tokenProvider,
};
