import React, { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => {
            setDarkMode(!darkMode);
            document.body.style.background = !darkMode ? '#333' : '#fafafa';
            document.body.style.color = !darkMode ? '#fff' : '#000';
          }}
        />
        Enable Dark Mode
      </label>
    </div>
  );
}

export default Settings;
