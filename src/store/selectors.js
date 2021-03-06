import {createSelector} from "reselect";
import {getFilmsFilter} from "../utils";

export const getFilms = (state) => state.DATA.films;
export const getActiveGenre = (state) => state.DATA.activeGenre;
export const getShownFilmsCount = (state) => state.DATA.shownFilmsCount;
export const getIsLoading = (state) => state.DATA.isLoading;
export const getReviews = (state) => state.DATA.currentFilmReviews;
export const getPromoFilm = (state) => state.DATA.promoFilm;
export const getIsReviewSubmitting = (state) => state.DATA.isReviewSubmitting;

export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;
export const getError = (state) => state.USER.error;

export const getFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => {
      const filmsFilter = getFilmsFilter(films);

      return filmsFilter[genre](films);
    }
);

export const getFavoriteFilms = createSelector(
    getFilms,
    (films) => {
      return films.filter((film) => film.isFavorite);
    }
);
