import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ 
        backgroundColor: '#333', 
        color: '#fff', 
        padding: '10px 20px',
        marginBottom: '20px'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h1>Movie Explorer</h1>
          <nav>
            <ul style={{ 
              listStyle: 'none', 
              display: 'flex', 
              gap: '20px',
              margin: 0,
              padding: 0
            }}>
              <li>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ 
        textAlign: 'center',
        marginTop: '30px',
        padding: '10px',
        borderTop: '1px solid #eee',
        color: '#666'
      }}>
        <p>&copy; 2025 Movie Explorer</p>
      </footer>
    </div>
  );
};

export default Layout;
