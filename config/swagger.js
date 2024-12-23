const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bookstore API Documentation',
      version: '1.0.0',
      description: 'Documentation for Bookstore API',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      },
    },
    servers: [
      {
        url: process.env.BASE_URL || 'https://be-serverless.vercel.app',
        description: 'Production server',
      },
      {
        url: 'http://localhost:3002',
        description: 'Development server',
      }
    ],
  },
  apis: [
    './routes/*.js',
    './models/*.js'
  ],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
