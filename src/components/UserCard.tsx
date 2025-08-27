import React from 'react';
import type { User } from '../types/user';

interface UserCardProps {
  user: User;
  onSelect: (user: User) => void;
  isSelected: boolean;
}

const UserCard: React.FC<UserCardProps> = React.memo(({ user, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(user);
  };

  return (
    <button
      className={`user-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      type="button"
    >
      <div className="user-card-header">
        <h3>{user.name}</h3>
        <span className="username">@{user.username}</span>
      </div>
      <div className="user-card-body">
        <p className="email">{user.email}</p>
        <p className="phone">{user.phone}</p>
        <p className="website">{user.website}</p>
      </div>
    </button>
  );
});

UserCard.displayName = 'UserCard';

export default UserCard;
