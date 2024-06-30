/**
 * @file userController.js
 * @description Controller for handling user-related operations.
 */

const User = require('../models/userModel');
const userService = require('../services/userService');

/**
 * Get all users.
 * @route GET /api/users
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Create a new user.
 * @route POST /api/users
 * @param {Object} req.body - User data.
 */
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await userService.createUser({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
