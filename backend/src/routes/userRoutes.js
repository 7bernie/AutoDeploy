/**
 * @file userRoutes.js
 * @description Defines the user-related routes.
 */

const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');
const router = express.Router();

// Route to get all users
router.get('/', getAllUsers);

// Route to create a new user
router.post('/', createUser);

module.exports = router;
