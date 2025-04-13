const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  text: { type: String, required: true },
  emotion: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Memory', memorySchema);
