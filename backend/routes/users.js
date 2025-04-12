// backend/routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Register new user
router.post('/register', userController.register);

// Login user
router.post('/login', userController.login);

// Update profile (protected route)
router.put('/profile', auth, userController.updateProfile);

module.exports = router;
