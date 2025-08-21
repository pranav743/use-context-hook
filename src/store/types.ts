// Shared application types

export type User = {
  id: number;
  username: string;
  password: string;
};

export type Post = {
  id: number;
  userId?: number;
  title: string;
  body: string;
};

// Auth State
export type AuthState = {
  isAuth: boolean;
  currentUser: Omit<User, 'password'> | null;
  error: string | null;
};

// Users State (static)
export type UsersState = {
  users: User[];
};

// Posts State
export type PostsState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

export type RootState = {
  auth: AuthState;
  users: UsersState;
  posts: PostsState;
};
