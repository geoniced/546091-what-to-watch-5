import {ActionType} from "./actions";
import films from "../mocks/films";
import {extend, getFilmsFilter} from "../utils";
import {ALL_GENRES_FILTER} from "../const";

const initialState = {
  activeGenre: ALL_GENRES_FILTER,
  films,
  initialFilms: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.GET_FILMS_BY_GENRE:
      const filmsFilter = getFilmsFilter(state.initialFilms);

      const genre = action.payload;
      const filmsByGenre = filmsFilter[genre](state.initialFilms);

      return extend(state, {
        films: filmsByGenre,
      });
  }
  return state;
};

export {reducer};
