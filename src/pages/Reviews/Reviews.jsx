import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { getMovieReviews } from 'serviceApi/getMovieReviews';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

import { Section } from './Reviews.styled';


 const Reviews = () => {
  const [reviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(response => {
        setMovieReviews(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, some error:{error}</p>}

      <Section>
        <ReviewsList reviews={reviews} />
      </Section>
    </>
  );
};

export default Reviews;
