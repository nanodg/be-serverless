const express = require('express');
const cors = require('cors');

const setupApp = (app) => {
  // Middleware
  app.use(cors());
  app.use(express.json());
  
  // Welcome route
  app.get('/api', (req, res) => {
    res.json({
      success: true,
      message: 'Welcome to Bookstore API!',
      version: '1.0.0'
    });
  });
};

module.exports = setupApp;
