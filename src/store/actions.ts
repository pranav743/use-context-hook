import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from './actionTypes';
import type { Post, User } from './types';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';
import type { RootState } from './types';

// Auth action creators
export const loginRequest = (username: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (user: Omit<User, 'password'>) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({ type: LOGOUT as typeof LOGOUT });

// Posts action creators
export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST as typeof FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (posts: Post[]) => ({ type: FETCH_POSTS_SUCCESS as typeof FETCH_POSTS_SUCCESS, payload: posts });
export const fetchPostsFailure = (error: string) => ({ type: FETCH_POSTS_FAILURE as typeof FETCH_POSTS_FAILURE, payload: error });

export const addPost = (post: Omit<Post, 'id'>) => ({ type: ADD_POST as typeof ADD_POST, payload: post });
export const editPost = (post: Post) => ({ type: EDIT_POST as typeof EDIT_POST, payload: post });
export const deletePost = (id: number) => ({ type: DELETE_POST as typeof DELETE_POST, payload: id });

// Thunks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export const fetchPosts = (): AppThunk => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
  try {
    dispatch(fetchPostsRequest());
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
    const data = (await res.json()) as Post[];
    // Ensure we only use id,title,body,userId
    const posts = data.map((p) => ({ id: p.id, userId: p.userId, title: p.title, body: p.body }));
    dispatch(fetchPostsSuccess(posts));
  } catch (err: any) {
    dispatch(fetchPostsFailure(err?.message ?? 'Unknown error'));
  }
};

export const login = (username: string, password: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(loginRequest(username, password));
    // simulate async
    await new Promise((r) => setTimeout(r, 300));
    const { users } = getState();
    const match = users.users.find((u) => u.username === username && u.password === password);
    if (match) {
      const { password: _pw, ...safe } = match;
      dispatch(loginSuccess(safe));
      // Immediately fetch posts after login success
      // Not awaiting to avoid blocking
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      (dispatch as any)(fetchPosts() as any);
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  };
