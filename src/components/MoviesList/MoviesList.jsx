import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmsItem } from './MoviesList.styled';

export const MovieList = ({ movies }) => {
    const location = useLocation();
  return (
    <>
      {movies.map(movie => (
        <FilmsItem key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
        </FilmsItem>
      ))}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
        
