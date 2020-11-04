import {ActionType} from "../../actions";
import {extend, getFilmsFilter, adaptFilmToClient} from "../../../utils";
import {ALL_GENRES_FILTER, FILM_CARDS_PER_STEP} from "../../../const";

const initialState = {
  activeGenre: ALL_GENRES_FILTER,
  films: [],
  initialFilms: [],
  shownFilmsCount: 0,
};

const filmsData = (state = initialState, action) => {
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
    case ActionType.INCREASE_SHOWN_FILM_CARDS:
      return extend(state, {
        shownFilmsCount: Math.min(state.shownFilmsCount + FILM_CARDS_PER_STEP, state.initialFilms.length),
      });
    case ActionType.RESET_SHOWN_FILM_CARDS:
      return extend(state, {
        shownFilmsCount: Math.min(FILM_CARDS_PER_STEP, state.initialFilms.length),
      });
    case ActionType.LOAD_FILMS:
      const payloadFilms = action.payload;

      const films = payloadFilms.map((film) => adaptFilmToClient(film));

      return extend(state, {
        initialFilms: films,
        films,
        shownFilmsCount: Math.min(FILM_CARDS_PER_STEP, films.length)
      });
  }

  return state;
};

export {filmsData};
