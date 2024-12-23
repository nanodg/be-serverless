const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const menuSchema = new mongoose.Schema({
  key: {
    type: String,
    default: uuidv4,
    unique: true,
    trim: true
  },
  categoryId: {
    type: String,
    required: [true, 'Category ID is required'],
    validate: {
      validator: async function(value) {
        const FoodCategory = mongoose.model('FoodCategory');
        const category = await FoodCategory.findOne({ key: value });
        return category !== null;
      },
      message: 'Invalid food category'
    }
  },
  name: {
    type: String,
    required: [true, 'Food name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Food description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  }
}, {
  timestamps: true
});

// Add index for better query performance
menuSchema.index({ categoryId: 1 });
menuSchema.index({ name: 1 });
menuSchema.index({ price: 1 });

module.exports = mongoose.models.Menu || mongoose.model('Menu', menuSchema);
