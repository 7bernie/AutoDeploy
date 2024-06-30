/**
 * @file userService.js
 * @description Service layer for user operations.
 */

const User = require('../models/userModel');

/**
 * Get all users from the database.
 * @returns {Promise<Array>}
 */
const getAllUsers = async () => {
  return await User.find({});
};

/**
 * Create a new user.
 * @param {Object} userData - User data.
 * @returns {Promise<Object>}
 */
const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

module.exports = {
  getAllUsers,
  createUser,
};
