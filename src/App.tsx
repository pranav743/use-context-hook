
import React, { useState } from "react";
import UserList from "./components/UserList/UserList";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import EditUserForm from "./components/EditUserForm/EditUserForm";
import type { User } from "./types/Types";
import { initialUsers } from "./utils/constants";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const addUser = (user: Omit<User, "id">) => {
    setUsers((prev) => [
      ...prev,
      { ...user, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const startEditUser = (user: User) => {
    setEditingUser(user);
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>User Management</h2>
      {editingUser ? (
        <EditUserForm user={editingUser} updateUser={updateUser} cancelEdit={() => setEditingUser(null)} />
      ) : (
        <AddUserForm addUser={addUser} />
      )}
      <UserList users={users} onEdit={startEditUser} onDelete={deleteUser} />
    </div>
  );
};

export default App;
