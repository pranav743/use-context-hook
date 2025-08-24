import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMovies, deleteMovie } from '../../features/movies/moviesSlice';
import type { Movie } from '../../types/movie.types';
import { LoadingStatus } from '../../utils/constants';
import MovieForm from '../MovieForm/MovieForm';

const MovieList = () => {
  const dispatch = useAppDispatch();
  const { movies, status, error } = useAppSelector((state) => state.movies);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [filterGenre, setFilterGenre] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'none' | 'asc' | 'desc'>('none');
  
  useEffect(() => {
    if (status === LoadingStatus.IDLE) {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);
  
  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
    }
  };
  
  const handleEdit = (movie: Movie) => {
    setEditingMovie(movie);
  };
  
  const handleCancelEdit = () => {
    setEditingMovie(null);
  };
  
  // Get unique genres for filter
  const genres = [...new Set(movies.map(movie => movie.genre))] as string[];
  
  // Filter and sort movies
  const filteredMovies = movies
    .filter(movie => filterGenre ? movie.genre === filterGenre : true)
    .filter(movie => searchTerm ? 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) : 
      true
    )
    .sort((a, b) => {
      if (sortBy === 'asc') return a.rating - b.rating;
      if (sortBy === 'desc') return b.rating - a.rating;
      return 0;
    });
  
  if (status === LoadingStatus.LOADING && movies.length === 0) {
    return <div>Loading...</div>;
  }
  
  if (status === LoadingStatus.FAILED) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      <h2>Movie List</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search movies..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        
        <select 
          value={filterGenre} 
          onChange={(e) => setFilterGenre(e.target.value)}
          style={{ marginRight: '10px' }}
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value as 'none' | 'asc' | 'desc')}
        >
          <option value="none">Sort by Rating</option>
          <option value="asc">Rating (Low to High)</option>
          <option value="desc">Rating (High to Low)</option>
        </select>
      </div>
      
      {status === LoadingStatus.LOADING && <div>Updating...</div>}
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Title</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Genre</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Rating</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <tr key={movie.id}>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{movie.title}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{movie.genre}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{movie.rating}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                  <button 
                    onClick={() => handleEdit(movie)}
                    style={{ marginRight: '5px', background: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => movie.id && handleDelete(movie.id)}
                    style={{ background: '#f44336', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', padding: '10px' }}>No movies found</td>
            </tr>
          )}
        </tbody>
      </table>
      
      {editingMovie && (
        <div style={{ marginTop: '20px' }}>
          <h3>Edit Movie</h3>
          <MovieForm movie={editingMovie} onCancel={handleCancelEdit} />
        </div>
      )}
    </div>
  );
};

export default MovieList;
