const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const foodCategorySchema = new mongoose.Schema({
  key: {
    type: String,
    default: uuidv4,
    unique: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.FoodCategory || mongoose.model('FoodCategory', foodCategorySchema);
