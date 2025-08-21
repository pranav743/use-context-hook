import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import type { ThunkDispatch } from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { usersReducer } from './reducers/usersReducer';
import { postsReducer } from './reducers/postsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  posts: postsReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<AppState, unknown, { type: string; payload?: unknown }>;
