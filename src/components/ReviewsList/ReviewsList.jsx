import PropTypes from 'prop-types';

export const ReviewsList = ({movieReviews}) => {
  return (
    <ul>
      {movieReviews.map(review => {
        return (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <span>{review.content}</span>
          </li>
        )
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  movieReviews: PropTypes.array
};