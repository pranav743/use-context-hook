import React, { useState } from "react";
import type { User } from "../../types/Types";

type EditUserFormProps = {
  user: User;
  updateUser: (user: User) => void;
  cancelEdit: () => void;
};

const EditUserForm: React.FC<EditUserFormProps> = ({ user, updateUser, cancelEdit }) => {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;
    updateUser({ ...user, name, role });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button type="submit">Update</button>
      <button type="button" onClick={cancelEdit} style={{ marginLeft: 8 }}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
