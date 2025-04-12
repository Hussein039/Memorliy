// frontend/src/components/Settings.js
import React, { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontType, setFontType] = useState('default');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You could also toggle a CSS class on body here
    document.body.style.background = darkMode ? '#fafafa' : '#333';
    document.body.style.color = darkMode ? '#333' : '#fafafa';
  };

  return (
    <div>
      <h2>App Settings</h2>
      <div>
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>
      </div>
      <div>
        <label>Font Type: </label>
        <select value={fontType} onChange={e => setFontType(e.target.value)}>
          <option value="default">Default</option>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
