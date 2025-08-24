import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addMovie, updateMovie } from '../../features/movies/moviesSlice';
import { LoadingStatus } from '../../utils/constants';
import type { Movie } from '../../types/movie.types';

interface MovieFormProps {
  movie?: Movie;
  onCancel?: () => void;
}

const MovieForm = ({ movie, onCancel }: MovieFormProps) => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(state => state.movies);
  
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    genre: '',
    rating: ''
  });
  
  const getBtnText = () => {
    if (movie?.id) {
      return 'Update Movie';
    }
    return 'Add Movie';
  };
  
  // If movie prop is provided, we're in edit mode
  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setGenre(movie.genre);
      setRating(movie.rating.toString());
    }
  }, [movie]);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      title: '',
      genre: '',
      rating: ''
    };
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
      valid = false;
    }
    
    if (!genre.trim()) {
      newErrors.genre = 'Genre is required';
      valid = false;
    }
    
    const ratingNum = parseFloat(rating);
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 10) {
      newErrors.rating = 'Rating must be a number between 0 and 10';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const movieData = {
      title,
      genre,
      rating: parseFloat(rating)
    };
    
    if (movie?.id) {
      dispatch(updateMovie({ ...movieData, id: movie.id }));
    } else {
      dispatch(addMovie(movieData));
    }
    
    // Reset form if not in edit mode
    if (!movie) {
      setTitle('');
      setGenre('');
      setRating('');
    } else if (onCancel && status === LoadingStatus.SUCCEEDED) {
      onCancel();
    }
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: errors.title ? '1px solid red' : '1px solid #ccc' 
          }}
        />
        {errors.title && <div style={{ color: 'red', fontSize: '0.8em' }}>{errors.title}</div>}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="genre" style={{ display: 'block', marginBottom: '5px' }}>
          Genre:
        </label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: errors.genre ? '1px solid red' : '1px solid #ccc' 
          }}
        />
        {errors.genre && <div style={{ color: 'red', fontSize: '0.8em' }}>{errors.genre}</div>}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="rating" style={{ display: 'block', marginBottom: '5px' }}>
          Rating (0-10):
        </label>
        <input
          type="number"
          id="rating"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: errors.rating ? '1px solid red' : '1px solid #ccc' 
          }}
        />
        {errors.rating && <div style={{ color: 'red', fontSize: '0.8em' }}>{errors.rating}</div>}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button 
          type="submit" 
          disabled={status === LoadingStatus.LOADING}
          style={{
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: status === LoadingStatus.LOADING ? 'not-allowed' : 'pointer',
            opacity: status === LoadingStatus.LOADING ? 0.7 : 1
          }}
        >
          {status === LoadingStatus.LOADING 
            ? 'Saving...' 
            : getBtnText()}
        </button>
        
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            style={{
              background: '#f44336',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default MovieForm;
