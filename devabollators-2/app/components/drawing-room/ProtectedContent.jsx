import React, { useState } from 'react';
import Editor from './Editor';

function ProtectedContent() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPasscode = process.env.NEXT_PUBLIC_SECRET_PASSCODE1;

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
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 max-w-xs mx-auto">
          <label htmlFor="passcode-input" className="text-sm font-medium text-gray-700 md:text-base">Enter Passcode:</label>
          <input
            type="password"
            id="passcode-input"
            value={passcode}
            onChange={handlePasscodeChange}
            className="border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500 w-30% mr-5"
          />
          <button type="submit" className="bg-blue-900 text-white p-2 rounded-md hover:bg-blue-100 text-sm md:text-base">Unlock</button>
        </form>
      ) : (
        <div className='text-slate-500 text-center'>
          <h2 className='text-slate-500'>Welcome! Here's your secret content:</h2>
          <p>This is the content that is hidden by the passcode.</p>
          {/* <ul> */}
            {/* <li>Sensitive information 1</li> */}
            {/* <div className='w-full flex flex-col-reverse xl:flex-row'>
            <div className='grid grid-cols-2 gap-4 '> */}
            <div className="grid grid-cols-4 gap-3 text-slate-600 mt-3">
                                  <div><a href="#browny" >Browny Steps</a></div>
                                  <div><a href="#baby" >Babyblue Steps</a></div>
                                  <div><a href="#pinky" >Pinky Steps</a></div>
                                  <div><a href="#navy" >Navy Steps</a></div>
            </div>
            <div className='container'><Editor /></div>
                
            {/* </div>
            </div> */}
          {/* </ul> */}
        </div>
      )}
    </div>
  );
}

export default ProtectedContent;