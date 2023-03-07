// Required modules
const amqp = require('amqplib');

let channel = null;

const connect = async () => {
  // Create connection with rabbitMQ
  const connection = await amqp.connect({
    protocol: 'amqp',
    hostname: 'rabbitmq',
    port: 5672,
    username: 'juan123',
    password: 'juan123',
  });

  if(channel) return;

  // Create channel
  channel = await connection.createChannel();
};

const closeChanel = async () => {
  await channel.close();
  channel = null;
};

const getChannel = async () => {
  if (!channel) {
    await connect();
  }
  return channel;
};

module.exports = {
  getChannel,
  closeChanel,
};
