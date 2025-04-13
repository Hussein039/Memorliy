import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RandomMemory() {
  const [memory, setMemory] = useState(null);

  useEffect(() => {
    fetchRandomMemory();
  }, []);

  const fetchRandomMemory = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/memories');
      const allMemories = res.data;
      if (allMemories.length > 0) {
        const randomIndex = Math.floor(Math.random() * allMemories.length);
        setMemory(allMemories[randomIndex]);
      }
    } catch (err) {
      console.error('Error fetching random memory:', err);
    }
  };

  if (!memory) return <p>Loading random memory...</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Random Memory</h3>
      <p>{memory.text}</p>
      <p><strong>Emotion:</strong> {memory.emotion}</p>
      <button onClick={fetchRandomMemory}>Next</button>
    </div>
  );
}

export default RandomMemory;
