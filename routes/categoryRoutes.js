const express = require('express');
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - key
 *         - category
 *         - description
 *       properties:
 *         key:
 *           type: string
 *           description: The unique identifier for the category
 *         category:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: Detailed description of the category
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.route('/')
  .post(createCategory)
  .get(getAllCategories);

/**
 * @swagger
 * /categories/{key}:
 *   get:
 *     summary: Get category by key
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Category key
 *     responses:
 *       200:
 *         description: Category details
 *       404:
 *         description: Category not found
 *   put:
 *     summary: Update category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Category key
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category updated
 *       404:
 *         description: Category not found
 *   delete:
 *     summary: Delete category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Category key
 *     responses:
 *       200:
 *         description: Category deleted
 *       404:
 *         description: Category not found
 */
router.route('/:key')
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
