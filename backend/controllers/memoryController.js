// backend/controllers/memoryController.js
const Memory = require('../models/Memory');

exports.createMemory = async (req, res) => {
  try {
    const { title, text, emotion, date } = req.body;
    // If there is an uploaded file, use its path; otherwise, set to empty string.
    const image = req.file ? req.file.path : '';

    const newMemory = new Memory({ title, text, emotion, image, date });
    const savedMemory = await newMemory.save();
    res.json(savedMemory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
};


exports.getMemories = async (req, res) => {
  try {
    let query = Memory.find();
    if (req.query.emotion) {
      query = query.where('emotion').equals(req.query.emotion);
    }
    if (req.query.sort === 'popular') {
      // This sort is a simple example (sorting by heart reactions)
      query = query.sort({ 'reactions.heart': -1 });
    } else if (req.query.sort === 'newest') {
      query = query.sort({ createdAt: -1 });
    }
    const memories = await query.exec();
    res.json(memories);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
};

exports.getRandomMemory = async (req, res) => {
  try {
    const count = await Memory.countDocuments();
    const random = Math.floor(Math.random() * count);
    const memory = await Memory.findOne().skip(random);
    res.json(memory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
};

exports.reactMemory = async (req, res) => {
  try {
    const { reaction } = req.body; // reaction should match key names: heart, sad, mindblown, laugh, repeat
    const memory = await Memory.findById(req.params.id);
    if (!memory) {
      return res.status(404).send('Memory not found.');
    }
    if (!memory.reactions[reaction]) memory.reactions[reaction] = 0;
    memory.reactions[reaction]++;
    await memory.save();
    res.json(memory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
};
