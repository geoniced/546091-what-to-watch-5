export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_FILM_IS_FAVORITE: `CHANGE_FILM_IS_FAVORITE`,
  CHANGE_PROMO_FILM_IS_FAVORITE: `CHANGE_PROMO_FILM_IS_FAVORITE`,
  INCREASE_SHOWN_FILM_CARDS: `INCREASE_SHOWN_FILM_CARDS`,
  RESET_SHOWN_FILM_CARDS: `RESET_SHOWN_FILM_CARDS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_REVIEWS_FOR_FILM: `LOAD_REVIEWS_FOR_FILM`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_ERROR: `SET_ERROR`,
  SET_REVIEW_SUBMITION_LOADING: `SET_REVIEW_SUBMITION_LOADING`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const changeFilmIsFavorite = (filmData) => ({
  type: ActionType.CHANGE_FILM_IS_FAVORITE,
  payload: filmData,
});

export const changePromoFilmIsFavorite = (filmData) => ({
  type: ActionType.CHANGE_PROMO_FILM_IS_FAVORITE,
  payload: filmData,
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

export const loadPromoFilm = (promoFilm) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: promoFilm,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setError = (errorObject) => ({
  type: ActionType.SET_ERROR,
  payload: errorObject,
});

export const setReviewSubmitionLoading = (isLoading) => ({
  type: ActionType.SET_REVIEW_SUBMITION_LOADING,
  payload: isLoading,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
