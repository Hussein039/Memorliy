// backend/routes/memories.js
const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/memoryController');
const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Create a new memory with image upload support
router.post('/', upload.single('image'), memoryController.createMemory);

// Other routes remain the same
router.get('/', memoryController.getMemories);
router.get('/random', memoryController.getRandomMemory);
router.post('/:id/react', memoryController.reactMemory);

module.exports = router;
