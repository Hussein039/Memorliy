const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  title: { type: String },
  text: { type: String, required: true },
  emotion: {
    type: String,
    enum: ['Heartwarming', 'Sad', 'Mysterious', 'Funny', 'Regretful', 'Inspiring'],
    required: false
  },
  image: { type: String },
  date: { type: Date },
  reactions: {
    heart: { type: Number, default: 0 },
    sad: { type: Number, default: 0 },
    mindblown: { type: Number, default: 0 },
    laugh: { type: Number, default: 0 },
    repeat: { type: Number, default: 0 }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Memory', MemorySchema);
