const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Get History API',
        version: '1.0.0',
        description: 'Get History API Documentation',
      },
      servers: [
        {
          url: 'http://localhost:5020',
        },
      ],
    },
    apis: [path.join(__dirname, './api-docs.js')],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => { app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); };