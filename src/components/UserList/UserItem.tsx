import React from "react";
import type { User } from "@/types/Types";

type UserItemProps = {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

const UserItem: React.FC<UserItemProps> = ({ user, onEdit, onDelete }) => (
  <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8, borderBottom: "1px solid #eee" }}>
    <span>
      <strong>{user.name}</strong> ({user.role})
    </span>
    <span>
      <button onClick={() => onEdit(user)} style={{ marginRight: 8 }}>Edit</button>
      <button onClick={() => onDelete(user.id)} style={{ color: "red" }}>Delete</button>
    </span>
  </li>
);

export default UserItem;
