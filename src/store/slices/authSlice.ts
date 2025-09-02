import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

// Check localStorage on initial load
if (typeof window !== 'undefined') {
  const savedAuth = localStorage.getItem('auth');
  if (savedAuth) {
    try {
      const parsedAuth = JSON.parse(savedAuth);
      if (parsedAuth.isLoggedIn && parsedAuth.user) {
        initialState.isLoggedIn = true;
        initialState.user = parsedAuth.user;
      }
    } catch (error) {
      console.error('Error parsing saved auth:', error);
    }
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('auth', JSON.stringify({
        isLoggedIn: true,
        user: action.payload
      }));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      // Remove from localStorage
      localStorage.removeItem('auth');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
