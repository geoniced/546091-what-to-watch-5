import {ALL_GENRES_FILTER} from "./const";

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
};
