import MovieList from '../MovieList/MovieList';
import MovieForm from '../MovieForm/MovieForm';
import { useAppSelector } from '../../app/hooks';

const Home = () => {
  const { error } = useAppSelector(state => state.movies);
  
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      {error && (
        <div style={{ 
          backgroundColor: '#f8d7da', 
          color: '#721c24',
          padding: '10px 15px',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          Error: {error}
        </div>
      )}
      
      <div style={{ marginBottom: '30px' }}>
        <h2>Add New Movie</h2>
        <MovieForm />
      </div>
      
      <MovieList />
    </div>
  );
};

export default Home;
