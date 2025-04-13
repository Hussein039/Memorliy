import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MemoryFeed from './components/MemoryFeed';
import RandomMemory from './components/RandomMemory';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Settings from './components/Settings';
import MyMemories from './components/MyMemories';
import AvatarDropdown from './components/AvatarDropdown';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('memorliyUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('memorliyUser');
    localStorage.removeItem('memorliyToken');
    setUser(null);
  };

  return (
    <div className="container">
      <header>
        <div className="header-top">
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: '#6c5ce7' }}>
              Memorliy
            </Link>
          </h1>
          <AvatarDropdown user={user} onLogout={handleLogout} />
        </div>
        <p>Whispers of the past, floating through the internet sea...</p>
        <nav>
          <Link to="/share">Share a Memory</Link> |{' '}
          <Link to="/">Read Memories</Link> |{' '}
          <Link to="/random">Random Memory</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<MemoryFeed user={user} />} />
        <Route path="/share" element={<MemoryFeed user={user} />} />
        <Route path="/random" element={<RandomMemory />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/my-memories" element={<MyMemories user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
