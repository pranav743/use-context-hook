// Deprecated

import React from 'react';

const NotFound: React.FC = () => {
    const handleGoHome = () => {
      window.location.href = '/';
    };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <button onClick={handleGoHome} className="home-btn" type="button">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
