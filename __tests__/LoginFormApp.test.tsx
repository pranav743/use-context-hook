import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoginFormApp from '../src/components/LoginFormApp';

describe('LoginFormApp', () => {
  it('renders the form correctly', () => {
    render(<LoginFormApp />);
    
    const heading = screen.getByRole('heading', { name: /login form app/i });
    expect(heading).toBeInTheDocument();
    
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
    
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
    
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('allows typing in email input', () => {
    render(<LoginFormApp />);
    const emailInput = screen.getByLabelText(/email/i);
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('allows typing in password input', () => {
    render(<LoginFormApp />);
    const passwordInput = screen.getByLabelText(/password/i);
    
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');
  });

  it('shows welcome message when form is submitted', () => {
    render(<LoginFormApp />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);
    
    const welcomeMessage = screen.getByText('Welcome, john@example.com');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('hides the form when welcome message is shown', () => {
    render(<LoginFormApp />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password456' } });
    fireEvent.click(loginButton);
    
    // Form should be hidden
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/password/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /login/i })).not.toBeInTheDocument();
    
    // Welcome message should be shown
    expect(screen.getByText('Welcome, jane@example.com')).toBeInTheDocument();
  });
});
