// Require modules
const amqp = require('amqplib');
const fs = require('fs');

const runRabittMQService = async () => {
    // Message of service
    console.log('Running RabbitMQ service');

    // Connect with rabbitMQ
    const connection = await amqp.connect({
        protocol: 'amqp',
        hostname: 'rabbitmq',
        port: 5672,
        username: 'juan123',
        password: 'juan123',
    });
    const channel = await connection.createChannel();

    const findFile = async (message) => {
        let result = {
            ...message,
        }

        fs.readdir('./src/files', (err, data) => {
            if (err) {
                result = {
                    ...result,
                    status: 500,
                    data: err.message
                }
            } else {
                const file = data.find(file => file === message.namefile);
                if (!file) {
                    result = {
                        ...result,
                        status: 404,
                        data: 'File not found'
                    }
                } else {
                    result = {
                        ...result,
                        status: 200,
                        data: file
                    }
                }
            }
            channel.assertQueue('response');
            channel.sendToQueue('response', Buffer.from(JSON.stringify(result)));
        });
    }

    // Response to GET method
    const findAllFiles = async (message) => {
        let result = {
            ...message,
        }

        fs.readdir('./src/files', (err, files) => {
            if (err) {
                result = {
                    ...result,
                    status: 500,
                    data: 'Error reading files'
                }
            } else {
                console.log('Files: ', files);
                result = {
                    ...result,
                    status: 200,
                    length: files.length,
                    data: files
                }
            }
            channel.assertQueue('response');
            channel.sendToQueue('response', Buffer.from(JSON.stringify(result)));
        });
    }

    // Create and consume queue
    await channel.assertQueue('request');
    channel.consume('request', (msg) => {
        try {
            const message = JSON.parse(msg.content.toString());
            console.log('Received Service 2: ', message);
            const { method, namefile } = message;
            if (method === 'GET' && namefile) findFile(message);
            else if (method === 'GET') findAllFiles(message);
        } catch (error) {
            console.log('Received: ', msg.content.toString());
        }
    }, {
        noAck: true
    });
}

// Run service
runRabittMQService();