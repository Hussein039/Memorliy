// frontend/src/components/MemoryCard.js
import React from 'react';
import { motion } from 'framer-motion';

function MemoryCard({ memory }) {
  return (
    <motion.div
      className="memory-card"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <p><strong>Text:</strong> {memory.text}</p>
      <p><strong>Emotion:</strong> {memory.emotion}</p>
      <p style={{ fontSize: '0.8rem', color: '#888' }}>
        Posted on: {new Date(memory.createdAt).toLocaleString()}
      </p>
    </motion.div>
  );
}

export default MemoryCard;
