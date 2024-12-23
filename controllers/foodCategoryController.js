const FoodCategory = require('../models/FoodCategory');

// Create food category
exports.createFoodCategory = async (req, res) => {
  try {
    const category = await FoodCategory.create(req.body);
    res.status(201).json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get all food categories
exports.getAllFoodCategories = async (req, res) => {
  try {
    const categories = await FoodCategory.find({});
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get single food category
exports.getFoodCategory = async (req, res) => {
  try {
    const category = await FoodCategory.findOne({ key: req.params.key });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Food category not found'
      });
    }
    res.json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update food category
exports.updateFoodCategory = async (req, res) => {
  try {
    const category = await FoodCategory.findOneAndUpdate(
      { key: req.params.key },
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Food category not found'
      });
    }

    res.json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete food category
exports.deleteFoodCategory = async (req, res) => {
  try {
    const category = await FoodCategory.findOneAndDelete({ key: req.params.key });
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Food category not found'
      });
    }

    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
