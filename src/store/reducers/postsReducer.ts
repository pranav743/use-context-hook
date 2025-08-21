import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  LOGOUT,
} from '../actionTypes';
import type { PostsState, Post } from '../types';

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export function postsReducer(
  state: PostsState = initialState,
  action: { type: string; payload?: any },
): PostsState {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_POST: {
      const nextId = state.posts.length > 0 ? Math.max(...state.posts.map((p) => p.id)) + 1 : 1;
      const newPost: Post = { id: nextId, ...action.payload };
      return { ...state, posts: [newPost, ...state.posts] };
    }
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((p) => (p.id === action.payload.id ? { ...p, ...action.payload } : p)),
      };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((p) => p.id !== action.payload) };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}
