export interface Post {
  id: string;
  title: string;
  content: string;
  views: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface FormValues {
  [key: string]: string;
}

export interface WindowSize {
  width: number;
  height: number;
}
