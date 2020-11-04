import React, {Fragment} from "react";
import {FilmTypes} from "../../prop-types-validations";
import {getRatingDescription} from "../../utils";

const ACTORS_TO_HIDE_COUNT = 5;

const getStarringFormatted = (starring) => {
  const firstFiveActors = starring.slice(0, ACTORS_TO_HIDE_COUNT).join(`, `);
  if (starring.length >= ACTORS_TO_HIDE_COUNT) {
    return `${firstFiveActors} and other`;
  }

  return firstFiveActors;
};

const FilmCardOverviewTab = (props) => {
  const {
    description,
    rating,
    ratingsCount,
    director,
    starring,
  } = props.film;

  const starringFormatted = getStarringFormatted(starring);
  const ratingDescription = getRatingDescription(rating);

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDescription}</span>
          <span className="movie-rating__count">{ratingsCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starringFormatted}</strong></p>
      </div>
    </Fragment>
  );
};

FilmCardOverviewTab.propTypes = {
  film: FilmTypes.filmCard,
};

export default FilmCardOverviewTab;
