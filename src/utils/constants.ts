// API endpoints
export const API_BASE_URL = "http://localhost:4000";
export const MOVIES_ENDPOINT = `${API_BASE_URL}/movies`;

// Loading states
export const LoadingStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed'
} as const;