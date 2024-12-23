const express = require('express');
const router = express.Router();
const {
  createFoodCategory,
  getAllFoodCategories,
  getFoodCategory,
  updateFoodCategory,
  deleteFoodCategory
} = require('../controllers/foodCategoryController');

/**
 * @swagger
 * components:
 *   schemas:
 *     FoodCategory:
 *       type: object
 *       required:
 *         - key
 *         - category
 *         - description
 *       properties:
 *         key:
 *           type: string
 *           description: UUID unik untuk kategori makanan
 *         category:
 *           type: string
 *           description: Nama kategori makanan
 *         description:
 *           type: string
 *           description: Deskripsi kategori makanan
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Tanggal pembuatan kategori
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Tanggal terakhir update kategori
 */

/**
 * @swagger
 * /food-categories:
 *   post:
 *     summary: Membuat kategori makanan baru
 *     tags: [FoodCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category
 *               - description
 *             properties:
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Kategori makanan berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/FoodCategory'
 */
router.post('/', createFoodCategory);

/**
 * @swagger
 * /food-categories:
 *   get:
 *     summary: Mendapatkan semua kategori makanan
 *     tags: [FoodCategory]
 *     responses:
 *       200:
 *         description: Daftar semua kategori makanan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/FoodCategory'
 */
router.get('/', getAllFoodCategories);

/**
 * @swagger
 * /food-categories/{key}:
 *   get:
 *     summary: Mendapatkan detail kategori makanan berdasarkan key
 *     tags: [FoodCategory]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Key kategori makanan
 *     responses:
 *       200:
 *         description: Detail kategori makanan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/FoodCategory'
 */
router.get('/:key', getFoodCategory);

/**
 * @swagger
 * /food-categories/{key}:
 *   put:
 *     summary: Mengupdate kategori makanan berdasarkan key
 *     tags: [FoodCategory]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Key kategori makanan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Kategori makanan berhasil diupdate
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/FoodCategory'
 */
router.put('/:key', updateFoodCategory);

/**
 * @swagger
 * /food-categories/{key}:
 *   delete:
 *     summary: Menghapus kategori makanan berdasarkan key
 *     tags: [FoodCategory]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Key kategori makanan
 *     responses:
 *       200:
 *         description: Kategori makanan berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 */
router.delete('/:key', deleteFoodCategory);

module.exports = router;
