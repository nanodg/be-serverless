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

// Import Redoc
const redoc = require('redoc-express');

// Initialize express
const app = express();

// Serve static files
app.use(express.static('public'));

// Setup database
connectDB();

// Setup app middleware and initial routes
setupApp(app);

app.get('/', (req, res) => {
  res.redirect('/docs');
});

// Redoc Documentation
app.get('/docs', redoc({
  title: 'API Documentation',
  specUrl: '/docs-json',
  redocOptions: {
    hideDownloadButton: true,
    theme: {
      colors: {
        primary: {
          main: '#2c3e50'
        }
      }
    }
  }
}));

// Serve OpenAPI spec
app.get('/docs-json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

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
  const port = process.env.PORT || 3002;
  app.listen(port, () => {
    console.log(`
🚀 Server running in ${process.env.NODE_ENV || 'development'} mode
📡 Listening on port ${port}
🌐 Access via: http://localhost:${port}
📚 API Documentation: http://localhost:${port}/docs
    `);
  });
}

module.exports = app;