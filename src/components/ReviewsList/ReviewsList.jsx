import PropTypes from 'prop-types';

import {
  ReviewsTitle,
  Reviews,
  EmptyReviews,
  ReviewsItem,
  Author,
  Content,
} from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Reviews>
        {reviews.length === 0 ? (
          <EmptyReviews>
            Oops! We don't have any reviews for this movie.
          </EmptyReviews>
        ) : (
          reviews.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </ReviewsItem>
            );
          })
        )}
      </Reviews>
    </>
  );
};

ReviewsList.propTypes={
  reviews: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string,
  author: PropTypes.string.isRequired,
  content : PropTypes.string.isRequired,
  }))
}
