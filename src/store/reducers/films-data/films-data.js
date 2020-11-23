import {ActionType} from "../../actions";
import {extend, adaptFilmToClient, adaptReviewToClient} from "../../../utils";
import {ALL_GENRES_FILTER, FILM_CARDS_PER_STEP} from "../../../const";

const initialState = {
  activeGenre: ALL_GENRES_FILTER,
  films: [],
  shownFilmsCount: 0,
  isLoading: true,
  currentFilmReviews: [],
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.INCREASE_SHOWN_FILM_CARDS:
      return extend(state, {
        shownFilmsCount: Math.min(state.shownFilmsCount + FILM_CARDS_PER_STEP, state.films.length),
      });

    case ActionType.RESET_SHOWN_FILM_CARDS:
      return extend(state, {
        shownFilmsCount: Math.min(FILM_CARDS_PER_STEP, state.films.length),
      });

    case ActionType.LOAD_FILMS:
      const payloadFilms = action.payload;

      const films = payloadFilms.map((film) => adaptFilmToClient(film));

      return extend(state, {
        films,
        shownFilmsCount: Math.min(FILM_CARDS_PER_STEP, films.length),
        isLoading: false,
      });

    case ActionType.LOAD_REVIEWS_FOR_FILM:
      const payloadReviews = action.payload.reviews;

      const reviews = payloadReviews.map((review) => adaptReviewToClient(review));

      return extend(state, {
        currentFilmReviews: reviews,
      });
  }

  return state;
};

export {filmsData};
