const express = require('express');
require('dotenv').config();

// Import configurations
const connectDB = require('./config/database');
const setupApp = require('./config/app');
const swaggerSpec = require('./config/swagger');

// Import routes
const menuRoutes = require('./routes/menuRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const bookRoutes = require('./routes/bookRoutes');
const foodCategoryRoutes = require('./routes/foodCategoryRoutes');

// Import middleware
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

// Import Swagger
const swaggerUi = require('swagger-ui-express');

// Initialize express
const app = express();

// Setup database
connectDB();

// Setup app middleware and initial routes
setupApp(app);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "API Documentation"
}));

// API routes
app.use('/api/menus', menuRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/food-categories', foodCategoryRoutes);

// Handle 404
app.use(notFound);

// Error handling
app.use(errorHandler);

// Start server if not in production
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`
🚀 Server running in ${process.env.NODE_ENV || 'development'} mode
📡 Listening on port ${port}
🌐 Access via: http://localhost:${port}
📚 API Documentation: http://localhost:${port}/api-docs
    `);
  });
}

module.exports = app;