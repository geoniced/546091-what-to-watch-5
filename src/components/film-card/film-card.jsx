import React from "react";

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

export default FilmCard;
