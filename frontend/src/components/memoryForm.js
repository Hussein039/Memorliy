// frontend/src/components/MemoryForm.js

import React, { useState } from 'react';
import axios from 'axios';

const MemoryForm = () => {
  const [formData, setFormData] = useState({
    text: '',
    emotion: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/memories', formData);
      alert('Memory shared!');
      setFormData({ text: '', emotion: '', date: '' });
    } catch (err) {
      console.error('Error submitting memory:', err);
      alert('Failed to submit memory.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Share your memory..."
        className="w-full p-2 border rounded mb-2"
        rows="5"
        required
      ></textarea>

      <select
        name="emotion"
        value={formData.emotion}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      >
        <option value="">Select an emotion</option>
        <option value="Heartwarming">Heartwarming</option>
        <option value="Sad">Sad</option>
        <option value="Mysterious">Mysterious</option>
        <option value="Funny">Funny</option>
        <option value="Regretful">Regretful</option>
        <option value="Inspiring">Inspiring</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Share Memory
      </button>
    </form>
  );
};

export default MemoryForm;
