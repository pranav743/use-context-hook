import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="theme-button">
        {theme === 'light' ? '🌙' : '☀️'} 
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <span className="current-theme">Current theme: {theme}</span>
    </div>
  );
}
