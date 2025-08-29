import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Posts, Users, Auth, ThemeToggle, WindowSizeDisplay } from './components';

type Page = 'posts' | 'users' | 'auth' | 'window-size';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('posts');

  const renderPage = () => {
    switch (currentPage) {
      case 'posts':
        return <Posts />;
      case 'users':
        return <Users />;
      case 'auth':
        return <Auth />;
      case 'window-size':
        return <WindowSizeDisplay />;
      default:
        return <Posts />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🎯 Custom Hooks Demo</h1>
        <ThemeToggle />
      </header>
      
      <nav className="navigation">
        <button 
          className={currentPage === 'posts' ? 'active' : ''} 
          onClick={() => setCurrentPage('posts')}
        >
          📄 Posts
        </button>
        <button 
          className={currentPage === 'users' ? 'active' : ''} 
          onClick={() => setCurrentPage('users')}
        >
          👤 Users
        </button>
        <button 
          className={currentPage === 'auth' ? 'active' : ''} 
          onClick={() => setCurrentPage('auth')}
        >
          🔑 Auth
        </button>
        <button 
          className={currentPage === 'window-size' ? 'active' : ''} 
          onClick={() => setCurrentPage('window-size')}
        >
          📏 Window Size
        </button>
      </nav>
      
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
