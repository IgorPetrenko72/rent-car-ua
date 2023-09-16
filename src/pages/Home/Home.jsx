import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getTrandingApi } from 'serviceApi/getTrandingApi';
import { Section, Title, FilmsList } from './Home.styled';
import { MovieList } from 'components/MoviesList/MoviesList';

 const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTrandingApi()
      .then(response => {
        setTrending(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {error && <p>Oops, some error:{error}</p>}

      <Section>
        <Title>Trending today</Title>
        <FilmsList>
          {trending && <MovieList movies={trending} />
          }
        </FilmsList>
      </Section>

      {isLoading && <Loader />}
    </>
  );
};

export default Home;