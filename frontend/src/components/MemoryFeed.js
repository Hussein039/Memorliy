// frontend/src/components/MemoryFeed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemoryForm from './memoryForm';
import MemoryCard from './MemoryCard';

function MemoryFeed({ user }) {
  const [memories, setMemories] = useState([]);

  const fetchMemories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/memories');
      // Assuming your backend returns memories sorted with newest first,
      // if not, you could sort here using: res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setMemories(res.data);
    } catch (err) {
      console.error('Error fetching memories:', err);
    }
  };

  useEffect(() => {
    fetchMemories();
  }, []);

  // This function inserts a new memory at the top of the array.
  const onMemoryPosted = (newMemory) => {
    setMemories(prev => [newMemory, ...prev]);
  };

  return (
    <div className="memory-feed-container">
      {user ? (
        <MemoryForm user={user} onMemoryPosted={onMemoryPosted} />
      ) : (
        <p>Please <a href="/login">login</a> to share a memory.</p>
      )}

      <div className="memory-list">
        {memories.map((memory) => (
          <MemoryCard key={memory._id} memory={memory} />
        ))}
      </div>
    </div>
  );
}

export default MemoryFeed;
