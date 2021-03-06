import PropTypes from "prop-types";

const filmProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingsCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runtime: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}).isRequired;

const filmListProps = PropTypes.arrayOf(filmProps).isRequired;

export const FilmTypes = {
  films: filmListProps,
  filmCard: filmProps,
};

const reviewProps = PropTypes.shape({
  text: PropTypes.string.isRequired,
  filmRating: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

const reviewsListProps = PropTypes.arrayOf(reviewProps).isRequired;

export const ReviewTypes = {
  reviewsList: reviewsListProps,
  review: reviewProps,
};
