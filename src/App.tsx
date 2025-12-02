import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TestPage from './components/TestPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test/:grade" element={<TestPage />} />
      </Routes>
    </Router>
  );
};

export default App;