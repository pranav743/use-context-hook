export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
export const ENDPOINTS = {
  USERS: '/users',
} as const;

export const FORM_VALIDATION = {
  NAME: {
    REQUIRED: 'Name is required',
    MIN_LENGTH: 2,
    MIN_LENGTH_MESSAGE: 'Name must be at least 2 characters',
  },
  EMAIL: {
    REQUIRED: 'Email is required',
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PATTERN_MESSAGE: 'Please enter a valid email address',
  },
  USERNAME: {
    REQUIRED: 'Username is required',
    MIN_LENGTH: 3,
    MIN_LENGTH_MESSAGE: 'Username must be at least 3 characters',
  },
} as const;