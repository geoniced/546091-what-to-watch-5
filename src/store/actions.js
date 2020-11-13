export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREASE_SHOWN_FILM_CARDS: `INCREASE_SHOWN_FILM_CARDS`,
  RESET_SHOWN_FILM_CARDS: `RESET_SHOWN_FILM_CARDS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_REVIEWS_FOR_FILM: `LOAD_REVIEWS_FOR_FILM`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
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

export const loadReviewsForFilm = (reviews, filmId) => ({
  type: ActionType.LOAD_REVIEWS_FOR_FILM,
  payload: {
    reviews,
    filmId,
  },
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
