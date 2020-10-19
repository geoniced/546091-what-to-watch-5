import {ActionType} from "./actions";
import films from "../mocks/films";
import {extend, getFilmsFilter} from "../utils";

const initialState = {
  genre: `all`,
  films,
  initialFilms: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
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
