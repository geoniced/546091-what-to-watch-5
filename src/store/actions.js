export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  INCREASE_SHOWN_FILM_CARDS: `INCREASE_SHOWN_FILM_CARDS`,
  RESET_SHOWN_FILM_CARDS: `RESET_SHOWN_FILM_CARDS`,
  LOAD_FILMS: `LOAD_FILMS`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const getFilmsByGenre = (genre) => ({
  type: ActionType.GET_FILMS_BY_GENRE,
  payload: genre,
});

export const increaseShownFilmCards = () => ({
  type: ActionType.INCREASE_SHOWN_FILM_CARDS,
});

export const resetShownFilmCards = () => ({
  type: ActionType.RESET_SHOWN_FILM_CARDS,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});
