import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import StudentsList from './components/StudentsList';
import StudentDetail from './components/StudentDetail';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

const Welcome: React.FC = () => (
  <div>
    <h1>Welcome to Student Portal</h1>
    <button>Login</button>
  </div>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} /> {/* /dashboard */}
            <Route path="profile" element={<Profile />} />{' '}
            <Route path="students" element={<StudentsList />} />{' '}
            <Route path="students/:id" element={<StudentDetail />} />{' '}
          </Route>
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
