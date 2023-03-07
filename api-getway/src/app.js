// Required modules
const express = require('express');

// Create express app
const app = express();

// All routes
const routes = require('./routes');

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add routes
app.use('/', routes);

// Export app
module.exports = app;