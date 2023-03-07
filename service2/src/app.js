// Required modules
const express = require('express');

// Create express app
const app = express();

// Add middleware
app.use(express.json());

// Add routes
app.route('/').get((req, res) => {
    res.send('Hello World!');
});

// Prove
app.route('/prove').get((req, res) => {
    res.status(200).json({
        message: 'Prove from service2'
    })
});

// Export app
module.exports = app;