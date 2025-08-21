// Dashboard.tsx
import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/dashboard');
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="students">Students</Link>
      </nav>
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
