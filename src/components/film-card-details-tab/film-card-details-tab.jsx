import React, {Fragment} from "react";
import {FilmTypes} from "../../prop-types-validations";

const getStarringActorsMarkup = (starringActors) => {
  return starringActors.map((actor, i, actors) => (
    <Fragment key={`actor-${i}`} >
      {actor} {i < actors.length - 1 ? <br /> : ``}
    </Fragment>
  ));
};

const FilmCardDetailsTab = (props) => {
  const {
    genre,
    releaseYear,
    director,
    starring,
    runtime,
  } = props.film;

  const starringActorsFormatted = getStarringActorsMarkup(starring);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starringActorsFormatted}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runtime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseYear}</span>
        </p>
      </div>
    </div>
  );
};

FilmCardDetailsTab.propTypes = {
  film: FilmTypes.filmCard,
};

export default FilmCardDetailsTab;
