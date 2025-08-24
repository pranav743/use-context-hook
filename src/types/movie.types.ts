export interface Movie {
  id?: number;
  title: string;
  genre: string;
  rating: number;
}

export interface MoviesState {
  movies: Movie[];
  status: string;
  error: string | null;
}
