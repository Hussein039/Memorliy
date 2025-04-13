const Memory = require('../models/Memory');

exports.getAllMemories = async (req, res) => {
  const memories = await Memory.find().sort({ createdAt: -1 });
  res.json(memories);
};

exports.getUserMemories = async (req, res) => {
  const memories = await Memory.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(memories);
};

exports.createMemory = async (req, res) => {
  const { text, emotion } = req.body;
  const newMemory = await Memory.create({ text, emotion, userId: req.user.id });
  res.json(newMemory);
};

exports.updateMemory = async (req, res) => {
  const memory = await Memory.findById(req.params.id);
  if (!memory || memory.userId.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  memory.text = req.body.text;
  memory.emotion = req.body.emotion;
  await memory.save();
  res.json(memory);
};

exports.deleteMemory = async (req, res) => {
  const memory = await Memory.findById(req.params.id);
  if (!memory || memory.userId.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  await memory.remove();
  res.json({ message: 'Deleted' });
};
