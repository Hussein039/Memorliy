import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RandomMemory() {
  const [memory, setMemory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRandomMemory();
  }, []);

  const fetchRandomMemory = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/memories/random');
      setMemory(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!memory) return <p>Loading...</p>;

  return (
    <div className="random-memory">
      <h2>{memory.title ? memory.title : 'Untitled Memory'}</h2>
      <p>{memory.text}</p>
      <p>
        <strong>Emotion:</strong> {memory.emotion}
      </p>
      <div className="reactions">
        <p>💖 {memory.reactions?.heart || 0}</p>
        <p>😢 {memory.reactions?.sad || 0}</p>
        <p>🤯 {memory.reactions?.mindblown || 0}</p>
        <p>😂 {memory.reactions?.laugh || 0}</p>
        <p>🔁 {memory.reactions?.repeat || 0}</p>
      </div>
      <button onClick={fetchRandomMemory}>Next Memory</button>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
}

export default RandomMemory;
