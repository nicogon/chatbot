
// TODO move sequelize stuff to repository
const { Op } = require('sequelize');

const messageRepository = require('../repositories/message.repository');

function messagesAdapter(message) {
  const {
    createdAt,
    updatedAt,
    value,
    metadata,
    ...others
  } = message;

  const content = {
    string: others.type === 'string' ? value : undefined,
    video: others.type === 'video' ? value : undefined,
    image: others.type === 'image' ? value : undefined,
    metadata: JSON.parse(metadata) || undefined,
  };
  return {
    ...others,
    content,
    timestamp: createdAt,
  };
}
async function getMessagesByRecipient(recipient, start = 0, limit = 50) {
  const messages = (await messageRepository.findAll({
    where: {
      recipient,
      id: {
        [Op.gte]: start,
      },
    },
    raw: true,
    limit,
  }));
  return messages.map(messagesAdapter);
}

async function saveMessage(sender, recipient, {
  metadata,
  type,
  ...otherContent
}) {
  const value = otherContent.video || otherContent.image || otherContent.text;
  const message = await messageRepository.create({
    sender,
    recipient,
    metadata,
    value,
    type,
  });
  return { id: message.id, timestamp: message.createdAt };
}

module.exports = {
  getMessagesByRecipient,
  saveMessage,
};
