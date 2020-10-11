import React from "react";
import {Link} from "react-router-dom";
import {FilmTypes} from "../../prop-types-validations";

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
        <Link to="/films/id" className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: FilmTypes.filmCard,
};

export default FilmCard;
