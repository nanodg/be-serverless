/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API for managing books
 */

const express = require('express');
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBooksByCategory,
  getBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Book created successfully
 */
router.route('/')
  .post(createBook)
  /**
   * @swagger
   * /books:
   *   get:
   *     summary: Get all books
   *     tags: [Books]
   *     responses:
   *       200:
   *         description: List of books
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   title:
   *                     type: string
   *                   author:
   *                     type: string
   *                   description:
   *                     type: string
   *                   category:
   *                     type: string
   *                   price:
   *                     type: number
   */
  .get(getAllBooks);

/**
 * @swagger
 * /books/category/{categoryKey}:
 *   get:
 *     summary: Get books by category
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: categoryKey
 *         required: true
 *         description: Category key
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   description:
 *                     type: string
 *                   category:
 *                     type: string
 *                   price:
 *                     type: number
 */
router.get('/category/:categoryKey', getBooksByCategory);

/**
 * @swagger
 * /books/{key}:
 *   get:
 *     summary: Get book by key
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: key
 *         required: true
 *         description: Book key
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book found
 *       404:
 *         description: Book not found
 */
router.route('/:key')
  .get(getBook)
  /**
   * @swagger
   * /books/{key}:
   *   put:
   *     summary: Update book by key
   *     tags: [Books]
   *     parameters:
   *       - in: path
   *         name: key
   *         required: true
   *         description: Book key
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *               author:
   *                 type: string
   *               description:
   *                 type: string
   *               category:
   *                 type: string
   *               price:
   *                 type: number
   *     responses:
   *       200:
   *         description: Book updated successfully
   *       404:
   *         description: Book not found
   */
  .put(updateBook)
  /**
   * @swagger
   * /books/{key}:
   *   delete:
   *     summary: Delete book by key
   *     tags: [Books]
   *     parameters:
   *       - in: path
   *         name: key
   *         required: true
   *         description: Book key
   *         schema:
   *           type: string
   *     responses:
   *       204:
   *         description: Book deleted successfully
   *       404:
   *         description: Book not found
   */
  .delete(deleteBook);

module.exports = router;
