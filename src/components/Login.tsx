import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email === 'student5@web.com' && password === '12345678') {
      navigate('/test/grade5');
    } else if (email === 'student8@web.com' && password === '123456') {
      navigate('/test/grade8');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-2xl dark:bg-gray-800 rounded-xl dark:border-gray-700">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">Talent Test 2025</h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">Login to start your assessment</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors border border-gray-300 rounded-lg dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors border border-gray-300 rounded-lg dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="mb-4 text-sm text-center text-red-600 dark:text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-white transition-all duration-200 rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Demo Credentials</p>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">For Grade 5th</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">student5@web.com / 12345678</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">For Grade 8th</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">student8@web.com / 123456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;