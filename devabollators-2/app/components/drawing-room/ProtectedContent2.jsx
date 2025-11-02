import React, { useState } from 'react';
import Editor from './Editor';
import Learn from './Learn';

function ProtectedContent() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPasscode = process.env.NEXT_PUBLIC_SECRET_PASSCODE2;

  const handlePasscodeChange = (event) => {
    setPasscode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passcode === correctPasscode) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect passcode!');
      setPasscode(''); // Clear the input on incorrect attempt
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="passcode-input">Enter Passcode:</label>
          <input
            type="password"
            id="passcode-input"
            value={passcode}
            onChange={handlePasscodeChange}
          />
          <button type="submit">Unlock</button>
        </form>
      ) : (
        <div>
          <h2>Welcome! Here's your secret content:</h2>
          <p>This is the content that is hidden by the passcode.</p>
                <div><Learn /></div>
        </div>
      )}
    </div>
  );
}

export default ProtectedContent;