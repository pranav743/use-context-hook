import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { User } from '../types/user';

interface UserContextType {
  selectedUser: User | null;
  selectUser: (user: User | null) => void;
  users: User[];
  setUsers: (users: User[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const selectUser = useCallback((user: User | null) => {
    setSelectedUser(user);
  }, []);

  const value = useMemo(() => ({
    selectedUser,
    selectUser,
    users,
    setUsers,
  }), [selectedUser, selectUser, users]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
