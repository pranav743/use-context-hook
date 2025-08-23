import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/actions';

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector((s) => s.auth.error);
  const isAuth = useAppSelector((s) => s.auth.isAuth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  dispatch(login(username, password));
  };

  React.useEffect(() => {
    if (isAuth) navigate('/posts', { replace: true });
  }, [isAuth, navigate]);

  return (
    <div style={{ maxWidth: 360, margin: '80px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="alice"
            style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="1234"
            style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 12px' }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
