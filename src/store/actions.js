export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  INCREASE_SHOWN_FILM_CARDS: `INCREASE_SHOWN_FILM_CARDS`,
  RESET_SHOWN_FILM_CARDS: `RESET_SHOWN_FILM_CARDS`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: (genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre,
  }),
  increaseShownFilmCards: () => ({
    type: ActionType.INCREASE_SHOWN_FILM_CARDS,
  }),
  resetShownFilmCards: () => ({
    type: ActionType.RESET_SHOWN_FILM_CARDS,
  })
};
