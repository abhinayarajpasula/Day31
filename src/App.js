import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Books from './pages/Books';
import Authors from './pages/ManageAuthors';
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/books" element={<Books />} />
      <Route path="/authors" element={<Authors />} />
    </Routes>
  </Router>
);

export default App;