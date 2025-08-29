import { useForm } from '../hooks';

export function Signup() {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt:', values);
    alert(`Signup successful for: ${values.name}`);
    resetForm();
  };

  return (
    <div className="form-container">
      <h3>📝 Sign Up</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="signup-name">Name:</label>
          <input
            id="signup-name"
            type="text"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-email">Email:</label>
          <input
            id="signup-email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password:</label>
          <input
            id="signup-password"
            type="password"
            value={values.password}
            onChange={(e) => handleChange('password', e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-confirm-password">Confirm Password:</label>
          <input
            id="signup-confirm-password"
            type="password"
            value={values.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Sign Up</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </div>
      </form>
    </div>
  );
}
