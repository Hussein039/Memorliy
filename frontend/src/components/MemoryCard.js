import React from 'react';
import axios from 'axios';

function MemoryCard({ memory }) {
  const handleReact = async (reaction) => {
    try {
      await axios.post(`http://localhost:5000/api/memories/${memory._id}/react`, { reaction });
      // Optionally update local state or re-fetch the memory list for updated reactions
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="memory-card">
      {memory.title && <h3>{memory.title}</h3>}
      <p>{memory.text.substring(0, 100)}...</p>
      <p>
        <strong>Emotion:</strong> {memory.emotion}
      </p>
      <div className="reactions">
        <button onClick={() => handleReact('heart')}>💖 {memory.reactions?.heart || 0}</button>
        <button onClick={() => handleReact('sad')}>😢 {memory.reactions?.sad || 0}</button>
        <button onClick={() => handleReact('mindblown')}>🤯 {memory.reactions?.mindblown || 0}</button>
        <button onClick={() => handleReact('laugh')}>😂 {memory.reactions?.laugh || 0}</button>
        <button onClick={() => handleReact('repeat')}>🔁 {memory.reactions?.repeat || 0}</button>
      </div>
    </div>
  );
}

export default MemoryCard;
