import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MOVIES_ENDPOINT, LoadingStatus } from '@/utils/constants';
import type { Movie, MoviesState } from '@/types/movie.types';

// Initial state
const initialState: MoviesState = {
  movies: [],
  status: LoadingStatus.IDLE,
  error: null
};

// Async thunks
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(MOVIES_ENDPOINT);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const addMovie = createAsyncThunk(
  'movies/addMovie',
  async (movie: Omit<Movie, 'id'>, { rejectWithValue }) => {
    try {
      const response = await fetch(MOVIES_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });

      if (!response.ok) {
        throw new Error('Failed to add movie');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const updateMovie = createAsyncThunk(
  'movies/updateMovie',
  async (movie: Movie, { rejectWithValue }) => {
    try {
      if (!movie.id) {
        throw new Error('Movie ID is required for update');
      }

      const response = await fetch(`${MOVIES_ENDPOINT}/${movie.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });

      if (!response.ok) {
        throw new Error('Failed to update movie');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${MOVIES_ENDPOINT}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete movie');
      }

      return id;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

// Slice
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch movies
      .addCase(fetchMovies.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.status = LoadingStatus.SUCCEEDED;
        state.movies = action.payload;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = LoadingStatus.FAILED;
        state.error = action.payload as string;
      })
      // Add movie
      .addCase(addMovie.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(addMovie.fulfilled, (state, action: PayloadAction<Movie>) => {
        state.status = LoadingStatus.SUCCEEDED;
        state.movies.push(action.payload);
        state.error = null;
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.status = LoadingStatus.FAILED;
        state.error = action.payload as string;
      })
      // Update movie
      .addCase(updateMovie.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(updateMovie.fulfilled, (state, action: PayloadAction<Movie>) => {
        state.status = LoadingStatus.SUCCEEDED;
        const index = state.movies.findIndex(movie => movie.id === action.payload.id);
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateMovie.rejected, (state, action) => {
        state.status = LoadingStatus.FAILED;
        state.error = action.payload as string;
      })
      // Delete movie
      .addCase(deleteMovie.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(deleteMovie.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = LoadingStatus.SUCCEEDED;
        state.movies = state.movies.filter(movie => movie.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.status = LoadingStatus.FAILED;
        state.error = action.payload as string;
      });
  },
});

export default moviesSlice.reducer;
