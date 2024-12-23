const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const bookSchema = new mongoose.Schema({
  key: {
    type: String,
    default: uuidv4,
    unique: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    ref: 'Category',
    validate: {
      validator: async function(value) {
        const category = await mongoose.model('Category').findOne({ key: value });
        return category !== null;
      },
      message: 'Invalid category'
    }
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Book || mongoose.model('Book', bookSchema);
