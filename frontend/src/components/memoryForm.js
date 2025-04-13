// frontend/src/components/MemoryForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './MemoryForm.css';

function MemoryForm({ user, onMemoryPosted }) {
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState('');
  const [posting, setPosting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || !emotion) return alert('Fill in both text and emotion');

    setPosting(true);
    try {
      const token = localStorage.getItem('memorliyToken');
      const res = await axios.post(
        'http://localhost:5000/api/memories',
        { text, emotion },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setText('');
      setEmotion('');
      if (onMemoryPosted) onMemoryPosted(res.data);
    } catch (err) {
      console.error('Error posting memory:', err);
      alert('Error posting memory');
    } finally {
      setPosting(false);
    }
  };

  return (
    <form className="memory-form" onSubmit={handleSubmit}>
      <h3>Share a Memory</h3>
      <textarea
        placeholder="What's on your mind?"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
        required
      >
        <option value="">Select Emotion</option>
        <option value="Heartwarming">Heartwarming</option>
        <option value="Sad">Sad</option>
        <option value="Mysterious">Mysterious</option>
        <option value="Funny">Funny</option>
        <option value="Regretful">Regretful</option>
        <option value="Inspiring">Inspiring</option>
      </select>
      <button type="submit" disabled={posting}>
        {posting ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
}

export default MemoryForm;
