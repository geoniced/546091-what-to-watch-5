export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const ALL_GENRES_FILTER = `all`;

export const getFilmsFilter = (films) => {
  const filmGenres = new Set(films.map((film) => film.genre));

  const filmFilter = {
    [ALL_GENRES_FILTER]: (filmCards) => filmCards,
  };

  filmGenres.forEach((filmGenre) => {
    filmFilter[filmGenre] = (filmCards) => {
      return filmCards.filter((film) => film.genre === filmGenre);
    };
  });
};
