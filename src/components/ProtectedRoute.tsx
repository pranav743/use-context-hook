import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuth = useAppSelector((s) => s.auth.isAuth);
  if (!isAuth) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
