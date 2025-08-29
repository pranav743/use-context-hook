import { useForm } from '../hooks';

export function Login() {
  const { values, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', values);
    alert(`Login attempt for: ${values.email}`);
    resetForm();
  };

  return (
    <div className="form-container">
      <h3>🔑 Login</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="login-email">Email:</label>
          <input
            id="login-email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password:</label>
          <input
            id="login-password"
            type="password"
            value={values.password}
            onChange={(e) => handleChange('password', e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Login</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </div>
      </form>
    </div>
  );
}
