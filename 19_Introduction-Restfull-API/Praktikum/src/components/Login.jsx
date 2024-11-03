// src/components/Login.jsx

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const dummyUser = { username: 'admin', password: 'password123' };
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', true);
      window.location.reload(); // Reloads the page to reflect the logged-in state
    } else if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', true);
      window.location.reload(); // Reloads the page to reflect the logged-in state
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form className="space-y-4 w-full max-w-xs" onSubmit={handleLogin}>
        <h2 className="text-xl font-bold">Login</h2>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
