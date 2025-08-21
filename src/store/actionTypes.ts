// Auth action types
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE' as const;
export const LOGOUT = 'auth/LOGOUT' as const;

// Posts action types
export const FETCH_POSTS_REQUEST = 'posts/FETCH_POSTS_REQUEST' as const;
export const FETCH_POSTS_SUCCESS = 'posts/FETCH_POSTS_SUCCESS' as const;
export const FETCH_POSTS_FAILURE = 'posts/FETCH_POSTS_FAILURE' as const;
export const ADD_POST = 'posts/ADD_POST' as const;
export const EDIT_POST = 'posts/EDIT_POST' as const;
export const DELETE_POST = 'posts/DELETE_POST' as const;
