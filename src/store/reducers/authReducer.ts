import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../actionTypes';
import type { AuthState } from '../types';

const initialState: AuthState = {
  isAuth: false,
  currentUser: null,
  error: null,
};

export function authReducer(state: AuthState = initialState, action: { type: string; payload?: any }): AuthState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, currentUser: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, isAuth: false, currentUser: null, error: action.payload };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}
