import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {ALL_GENRES_FILTER, EMAIL_REGEXP, Rating, ReviewTextLength} from "./const";

dayjs.extend(duration);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilmGenres = (films) => {
  return [...new Set(films.map((film) => film.genre))];
};

export const getFilmsFilter = (films) => {
  const filmGenres = getFilmGenres(films);

  const filmFilter = {
    [ALL_GENRES_FILTER]: (filmCards) => filmCards,
  };

  filmGenres.forEach((filmGenre) => {
    filmFilter[filmGenre] = (filmCards) => {
      return filmCards.filter((film) => film.genre === filmGenre);
    };
  });

  return filmFilter;
};

export const getHoursAndMinutesDurationText = (timeInMinutes) => {
  const minutesDuration = dayjs.duration(timeInMinutes, `m`);
  const hours = minutesDuration.hours();
  const minutes = minutesDuration.minutes();

  return `${hours > 0 ? `${hours}h ` : ``}${minutes}m`;
};

export const getDurationWithColons = (timeInMinutes) => {
  const minutesDuration = dayjs.duration(timeInMinutes, `m`);

  const hours = minutesDuration.hours();
  const minutes = minutesDuration.minutes();
  const seconds = minutesDuration.seconds();

  const hoursText = hours < 10 ? `0${hours}` : hours;
  const minutesText = minutes < 10 ? `0${minutes}` : minutes;
  const secondsText = seconds < 10 ? `0${seconds}` : seconds;

  return `${hoursText}:${minutesText}:${secondsText}`;
};

export const adaptFilmToClient = (film) => {
  const adaptedFilm = {
    id: film.id,
    description: film.description,
    rating: film.rating,
    director: film.director,
    starring: film.starring,
    genre: film.genre,
    title: film.name,
    releaseYear: film.released,
    previewImage: film.preview_image,
    posterImage: film.poster_image,
    ratingsCount: film.scores_count,
    runtime: film.run_time,
    video: film.video_link,
    backgroundColor: film.background_color,
    backgroundImage: film.background_image,
    isFavorite: film.is_favorite,
    videoPreview: film.preview_video_link,
  };

  return adaptedFilm;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = {
    id: review.id,
    text: review.comment,
    filmRating: review.rating,
    userName: review.user.name,
    userId: review.user.id,
    date: review.date,
  };

  return adaptedReview;
};

export const getFilmById = (films, id) => {
  return films.find((filmItem) => Number(id) === filmItem.id);
};

export const getFilmIndexById = (films, filmId) => {
  return films.findIndex((film) => film.id === filmId);
};

export const setFilmForFilms = (films, updatedFilm) => {
  const changedFilmIndex = getFilmIndexById(films, updatedFilm.id);

  const copiedFilms = films.slice();
  const updatedFilms = [
    ...copiedFilms.slice(0, changedFilmIndex),
    updatedFilm,
    ...copiedFilms.slice(changedFilmIndex + 1)
  ];

  return updatedFilms;
};

export const getRatingDescription = (rating) => {
  let ratingDescription = ``;

  if (rating >= 0 && rating < 3) {
    ratingDescription = Rating.BAD;
  } else if (rating >= 3 && rating < 5) {
    ratingDescription = Rating.NORMAL;
  } else if (rating >= 5 && rating < 8) {
    ratingDescription = Rating.GOOD;
  } else if (rating >= 8 && rating < 10) {
    ratingDescription = Rating.VERY_GOOD;
  } else if (rating === 10) {
    ratingDescription = Rating.AWESOME;
  }

  return ratingDescription;
};

export const isValidEmail = (email) => EMAIL_REGEXP.test(email);

export const isValidPassword = (passwordValue) => {
  return passwordValue.length > 0;
};

export const isValidReviewText = (reviewText) => {
  return reviewText.length >= ReviewTextLength.MIN && reviewText.length <= ReviewTextLength.MAX;
};

export const isValidRatingStars = (ratingStars) => {
  return ratingStars > 0;
};

export const isInvalidValidation = (validation) => validation === false;

export const checkFieldValidity = ({field, value, setter, validationFunction, errorMessage}) => {
  let isValid = true;

  if (validationFunction(value)) {
    setter((prevState) => {
      return extend(prevState, {
        [field]: ``,
      });
    });
  } else {
    isValid = false;
    setter((prevState) => {
      return extend(prevState, {
        [field]: errorMessage,
      });
    });
  }

  return isValid;
};
