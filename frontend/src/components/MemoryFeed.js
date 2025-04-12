// frontend/src/components/MemoryFeed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemoryForm from './memoryForm';
import MemoryCard from './MemoryCard';

function MemoryFeed({ user }) {
  const [memories, setMemories] = useState([]);

  // Function to fetch all memories from the backend
  const fetchMemories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/memories');
      setMemories(res.data);
    } catch (error) {
      console.error('Error fetching memories:', error);
    }
  };

  // Fetch memories on component mount
  useEffect(() => {
    fetchMemories();
  }, []);

  return (
    <div>
      {/* The memory posting form (styled like your design) at the top */}
      <MemoryForm user={user} />

      {/* Render each memory as a MemoryCard */}
      {memories.map((memory) => (
        <MemoryCard key={memory._id} memory={memory} />
      ))}
    </div>
  );
}

export default MemoryFeed;
