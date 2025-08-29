import { useFetch } from '../hooks';
import type { User } from '../types';

export function Users() {
  const { data: users, loading, error } = useFetch<User[]>('http://localhost:3000/users');

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="users">
      <h2>👤 Users</h2>
      <div className="users-grid">
        {users?.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>📧 {user.email}</p>
            <p>💼 {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
