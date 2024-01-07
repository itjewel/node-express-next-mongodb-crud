// pages/Login.js
'use client'
// pages/Login.js
import React, { ChangeEvent, useState } from 'react';
import { useLoginMutation,login } from '../services/authService';


const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('employee');

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const mutation = useLoginMutation(selectedRole);

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log('Mutation type:', typeof mutation);

    try {
      const data = await login(mutation, username, password);
      console.log('Login successful:', data);
      // Handle login success
    } catch (error) {
      console.error('Login failed', error);
      // Handle login failure
    }
  };




  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-800">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={(e) => handleLogin(e)}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 p-3 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-3 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-600">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={selectedRole}
              onChange={handleRoleChange}
              className="mt-1 p-3 w-full border rounded-md"
            >
              <option value="employee">Employee</option>
              <option value="supervisor">Supervisor</option>
              <option value="administrator">Administrator</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
