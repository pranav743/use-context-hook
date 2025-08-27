import React, { useCallback } from 'react';
import UserCard from './UserCard';
import type { User } from '../types/user';

interface UserListProps {
  users: User[];
  selectedUser: User | null;
  onUserSelect: (user: User) => void;
}

const UserList: React.FC<UserListProps> = React.memo(({ users, selectedUser, onUserSelect }) => {
  const handleUserSelect = useCallback((user: User) => {
    onUserSelect(user);
  }, [onUserSelect]);

  if (users.length === 0) {
    return (
      <div className="empty-state">
        <p>No users found</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onSelect={handleUserSelect}
          isSelected={selectedUser?.id === user.id}
        />
      ))}
    </div>
  );
});

UserList.displayName = 'UserList';

export default UserList;
