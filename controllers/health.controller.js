const health = require('../services/health.service');

/**
 * Checks if the app is running fine.
 */
async function check(req, res) {
  res.json(health.getHealthStatus());
}

async function ping(req, res) {
  res.json(health.getHealthStatus());
}
module.exports = { check, ping };
