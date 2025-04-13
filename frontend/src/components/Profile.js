import React from 'react';

function Profile({ user, setUser }) {
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  const { username, email } = user; // If your user object stores these

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Your Profile</h2>
      <p><strong>Username:</strong> {username || 'Unknown'}</p>
      <p><strong>Email:</strong> {email || 'Unknown'}</p>
      {/* If you want to allow editing name/email, you can add a form here */}
    </div>
  );
}

export default Profile;
