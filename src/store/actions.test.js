import {
  changeGenre,
  ActionType,
  increaseShownFilmCards,
  resetShownFilmCards,
  loadFilms,
  loadReviewsForFilm,
  requireAuthorization,
  redirectToRoute,
  loadPromoFilm,
  changeFilmIsFavorite,
} from "./actions";
import {filmListMock, mockReviews} from "../test-data/test-data";
import {AuthorizationStatus} from "../const";

describe(`Action creators work correctly`, () => {
  it(`Action creator changeGenre works correctly`, () => {
    expect(changeGenre(`Action`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Action`,
    });
  });

  it(`Action creator increaseShownFilmCards works correctly`, () => {
    expect(increaseShownFilmCards()).toEqual({
      type: ActionType.INCREASE_SHOWN_FILM_CARDS,
    });
  });

  it(`Action creator resetShownFilmCards works correctly`, () => {
    expect(resetShownFilmCards()).toEqual({
      type: ActionType.RESET_SHOWN_FILM_CARDS,
    });
  });

  it(`Action creator loadFilms works correctly`, () => {
    expect(loadFilms(filmListMock)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: filmListMock,
    });
  });

  it(`Action creator loadReviewsForFilm works correctly`, () => {
    expect(loadReviewsForFilm(mockReviews, 1)).toEqual({
      type: ActionType.LOAD_REVIEWS_FOR_FILM,
      payload: {
        reviews: mockReviews,
        filmId: 1,
      },
    });
  });

  it(`Action creator requireAuthorization works correctly`, () => {
    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator redirectToRoute works correctly`, () => {
    expect(redirectToRoute(`/test-path`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/test-path`,
    });
  });

  it(`Action creator loadPromoFilm works correctly`, () => {
    expect(loadPromoFilm(filmListMock[0])).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: filmListMock[0],
    });
  });

  it(`Action creator loadPromoFilm works correctly`, () => {
    expect(changeFilmIsFavorite(1, filmListMock[0])).toEqual({
      type: ActionType.CHANGE_FILM_IS_FAVORITE,
      payload: filmListMock[0],
    });
  });
});
