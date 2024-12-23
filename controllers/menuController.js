const Menu = require('../models/Menu');
const FoodCategory = require('../models/FoodCategory');

// Create menu
exports.createMenu = async (req, res) => {
  try {
    // Check if category exists first
    const category = await FoodCategory.findOne({ key: req.body.categoryId });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Food category not found'
      });
    }

    const menu = await Menu.create(req.body);
    const menuWithCategory = await Menu.findOne({ key: menu.key });
    const categoryData = await FoodCategory.findOne({ key: menuWithCategory.categoryId });

    res.status(201).json({
      success: true,
      data: {
        ...menuWithCategory.toObject(),
        category: categoryData
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get all menus
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find({});
    // const menusWithCategories = await Promise.all(
    //   menus.map(async (menu) => {
    //     const category = await FoodCategory.findOne({ key: menu.categoryId });
    //     return {
    //       ...menu.toObject(),
    //       category
    //     };
    //   })
    // );

    res.json({
      success: true,
      data: menus
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get menu by category
exports.getMenusByCategory = async (req, res) => {
  try {
    const menus = await Menu.find({ categoryId: req.params.categoryId });
    const category = await FoodCategory.findOne({ key: req.params.categoryId });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    const menusWithCategory = menus.map(menu => ({
      ...menu.toObject(),
      category
    }));

    res.json({
      success: true,
      data: menusWithCategory
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get single menu
exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.findOne({ key: req.params.key });

    if (!menu) {
      return res.status(404).json({
        success: false,
        message: 'Menu not found'
      });
    }

    const category = await FoodCategory.findOne({ key: menu.categoryId });
    const menuWithCategory = {
      ...menu.toObject(),
      category
    };

    res.json({
      success: true,
      data: menuWithCategory
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update menu
exports.updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findOneAndUpdate(
      { key: req.params.key },
      req.body,
      { new: true, runValidators: true }
    );

    if (!menu) {
      return res.status(404).json({
        success: false,
        message: 'Menu not found'
      });
    }

    res.json({
      success: true,
      data: menu
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete menu
exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findOneAndDelete({ key: req.params.key });

    if (!menu) {
      return res.status(404).json({
        success: false,
        message: 'Menu not found'
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
