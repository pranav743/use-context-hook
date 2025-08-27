import React from 'react';

interface ErrorDisplayProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message = 'Something went wrong', onRetry }) => {
  return (
    <div className="error">
      <div className="error-content">
        <h3>Error</h3>
        <p>{message}</p>
        {onRetry && (
          <button onClick={onRetry} className="retry-btn" type="button">
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;
