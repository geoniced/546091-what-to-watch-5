import PropTypes from "prop-types";

const filmProps = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  fullSizePoster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingDescription: PropTypes.string.isRequired,
  ratingsCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runtime: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
}).isRequired;

const filmListProps = PropTypes.arrayOf(filmProps).isRequired;

export const FilmTypes = {
  films: filmListProps,
  filmCard: filmProps,
};
