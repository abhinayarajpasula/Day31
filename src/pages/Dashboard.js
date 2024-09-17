import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/books">Manage Books</Link>
          </li>
          <li>
            <Link to="/authors">Manage Authors</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;