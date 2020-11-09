import {createSelector} from "reselect";
import {getFilmsFilter} from "../utils";

export const getFilms = (state) => state.DATA.films;
export const getActiveGenre = (state) => state.DATA.activeGenre;
export const getShownFilmsCount = (state) => state.DATA.shownFilmsCount;
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;

export const getFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => {
      const filmsFilter = getFilmsFilter(films);

      return filmsFilter[genre](films);
    }
);

