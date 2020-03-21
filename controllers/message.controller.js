const expressify = require('expressify')();

const authService = require('../services/auth.service');
const messageService = require('../services/message.service');

/**
 * Send a message from one user to another.
 * We support three types of messages `text`, `image` and `video`
 */

async function send(req, res) {
  const { sender, recipient, content } = req.body;
  const { authorization } = req.headers;
  // TODO create a validation of sender, recipient, content
  authService.authorize(authorization, sender.toString());
  const message = await messageService.saveMessage(sender, recipient, content);
  return res.send(200, message);
}

/**
 * Fetch all existing messages to a given recipient, within a range of message IDs.
 */
async function get(req, res) {
  // TODO: Retrieve list of Messages
  const { recipient, start, limit } = req.query;
  const { authorization } = req.headers;

  // TODO: add a start, limit, recipient validation
  authService.authorize(authorization, recipient);
  const messages = await messageService.getMessagesByRecipient(recipient, start, limit);
  return res.status(200).json({ messages });
}

module.exports = expressify({ get, send });
