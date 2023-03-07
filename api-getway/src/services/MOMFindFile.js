const { getChannel, closeChanel } = require('../connection.rabbitMQ');

// Functio that return a promise
const getResponse = async (channel) => {
    return new Promise((res, rej) => {
        channel.consume('response', (msg) => {
            console.log('Received API GETWAY: ', msg.content.toString());
            const message = JSON.parse(msg.content.toString());
            res(message);
        }, { noAck: true })
    })
}

const findFileMOM = async (message) => {
    const messageJsonString = JSON.stringify(message);

    // Create channel
    const channel = await getChannel();

    // Create queue
    await channel.assertQueue('request');

    // Send message to queue
    channel.sendToQueue('request', Buffer.from(messageJsonString));

    // Create queue response
    await channel.assertQueue('response');
    const response = await getResponse(channel);
    await closeChanel();
    return response;
}

const findAllFilesMOM = async (message) => {
    const messageJsonString = JSON.stringify(message);

    // Create channel
    const channel = await getChannel();

    // Create queue
    await channel.assertQueue('request');

    // Send message to queue
    channel.sendToQueue('request', Buffer.from(messageJsonString));

    // Create queue response
    await channel.assertQueue('response');
    const response = await getResponse(channel);
    await closeChanel();
    return response;
}



module.exports = { findFileMOM, findAllFilesMOM }