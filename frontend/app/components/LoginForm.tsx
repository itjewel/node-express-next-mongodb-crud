// components/LoginForm.tsx

import React, { useState, FormEvent, ChangeEvent } from 'react';

interface LoginFormProps {
  onLogin: (role: string, data: LoginData) => void;
}

interface LoginData {
username: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('employee');

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData: LoginData = { username, password };
    onLogin(selectedRole, loginData);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
  );
};

export default LoginForm;
