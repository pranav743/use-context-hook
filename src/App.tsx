import React from 'react';
import { UserProvider } from './context/UserContext';
import Home from './components/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <UserProvider>
      <div className="app">
        <Home />
      </div>
    </UserProvider>
  );
};

export default App;
