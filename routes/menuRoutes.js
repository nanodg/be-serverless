const express = require('express');
const router = express.Router();
const {
  createMenu,
  getAllMenus,
  getMenusByCategory,
  getMenu,
  updateMenu,
  deleteMenu
} = require('../controllers/menuController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Menu:
 *       type: object
 *       required:
 *         - key
 *         - categoryId
 *         - name
 *         - description
 *         - price
 *       properties:
 *         key:
 *           type: string
 *           description: Unique identifier for menu item
 *         categoryId:
 *           type: string
 *           description: Reference to food category
 *         name:
 *           type: string
 *           description: Name of the food item
 *         description:
 *           type: string
 *           description: Description of the food item
 *         price:
 *           type: number
 *           description: Price of the food item
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /menus:
 *   post:
 *     summary: Create a new menu item
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - categoryId
 *               - name
 *               - description
 *               - price
 *             properties:
 *               categoryId:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Menu item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuResponse'
 */
router.post('/', createMenu);

/**
 * @swagger
 * /menus:
 *   get:
 *     summary: Get all menu items
 *     tags: [Menu]
 *     responses:
 *       200:
 *         description: List of all menu items
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
 *                     $ref: '#/components/schemas/Menu'
 */
router.get('/', getAllMenus);

/**
 * @swagger
 * /menus/category/{categoryId}:
 *   get:
 *     summary: Get menu items by category
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     responses:
 *       200:
 *         description: List of menu items in category
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
 *                     $ref: '#/components/schemas/Menu'
 */
router.get('/category/:categoryId', getMenusByCategory);

/**
 * @swagger
 * /menus/{key}:
 *   get:
 *     summary: Get menu item by key
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Menu item key
 *     responses:
 *       200:
 *         description: Menu item details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuResponse'
 */
router.get('/:key', getMenu);

/**
 * @swagger
 * /menus/{key}:
 *   put:
 *     summary: Update menu item
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Menu item key
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryId:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Menu item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuResponse'
 */
router.put('/:key', updateMenu);

/**
 * @swagger
 * /menus/{key}:
 *   delete:
 *     summary: Delete menu item
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *         description: Menu item key
 *     responses:
 *       200:
 *         description: Menu item deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuResponse'
 */
router.delete('/:key', deleteMenu);

/**
 * @swagger
 * components:
 *   schemas:
 *     MenuResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         data:
 *           $ref: '#/components/schemas/Menu'
 */

module.exports = router;
