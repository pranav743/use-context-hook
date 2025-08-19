import React, { useState } from "react";
import type { User } from "../../types/Types";

type AddUserFormProps = {
  addUser: (user: Omit<User, "id">) => void;
};

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;
    addUser({ name, role });
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
