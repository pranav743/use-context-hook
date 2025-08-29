import { useState } from 'react';
import { Login } from './Login';
import { Signup } from './Signup';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth">
      <div className="auth-toggle">
        <button 
          className={isLogin ? 'active' : ''} 
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button 
          className={!isLogin ? 'active' : ''} 
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
}
