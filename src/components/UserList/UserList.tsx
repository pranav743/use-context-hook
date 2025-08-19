import React from "react";
import type { User } from "../../types/Types";
import UserItem from "./UserItem";

type UserListProps = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => (
  <div style={{ marginTop: 24 }}>
    <h3>User List</h3>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.length === 0 ? (
        <li>No users found.</li>
      ) : (
        users.map((user) => (
          <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
        ))
      )}
    </ul>
  </div>
);

export default UserList;
