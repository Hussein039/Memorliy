const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllMemories,
  getUserMemories,
  createMemory,
  updateMemory,
  deleteMemory
} = require('../controllers/memoryController');

router.get('/', getAllMemories);
router.get('/me', auth, getUserMemories);
router.post('/', auth, createMemory);
router.put('/:id', auth, updateMemory);
router.delete('/:id', auth, deleteMemory);

module.exports = router;
