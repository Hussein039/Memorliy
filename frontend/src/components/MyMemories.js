import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemoryCard from './MemoryCard';

function MyMemories({ user }) {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const fetchMyMemories = async () => {
      if (!user) return;
      try {
        const token = localStorage.getItem('memorliyToken');
        const res = await axios.get('http://localhost:5000/api/memories/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMemories(res.data);
      } catch (err) {
        console.error('Error fetching user memories:', err);
      }
    };

    fetchMyMemories();
  }, [user]);

  if (!user) {
    return <p>Please log in to view your memories.</p>;
  }

  return (
    <div>
      <h2>My Memories</h2>
      {memories.length === 0 ? (
        <p>You haven't posted any memories yet.</p>
      ) : (
        memories.map((memory) => (
          <MemoryCard key={memory._id} memory={memory} />
        ))
      )}
    </div>
  );
}

export default MyMemories;
