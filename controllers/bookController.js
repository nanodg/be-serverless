const Book = require('../models/Book');

// Create book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({
      success: true,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get books by category
exports.getBooksByCategory = async (req, res) => {
  try {
    const books = await Book.find({ category: req.params.categoryKey });
    res.json({
      success: true,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get single book
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ key: req.params.key });
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    res.json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { key: req.params.key },
      req.body,
      { new: true, runValidators: true }
    );
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    res.json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ key: req.params.key });
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    res.json({
      success: true,
      message: 'Book deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
