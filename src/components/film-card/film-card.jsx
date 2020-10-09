import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {
    title,
    fullSizePoster,
  } = props.film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={fullSizePoster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fullSizePoster: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmCard;