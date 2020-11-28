import {ActionType} from "../../actions";
import {extend, adaptFilmToClient, adaptReviewToClient, setFilmForFilms} from "../../../utils";
import {ALL_GENRES_FILTER, FILM_CARDS_PER_STEP, EMPTY_FILM} from "../../../const";

const initialState = {
  activeGenre: ALL_GENRES_FILTER,
  films: [],
  shownFilmsCount: 0,
  isLoading: true,
  currentFilmReviews: [],
  promoFilm: EMPTY_FILM,
  isReviewSubmitting: false,
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.CHANGE_FILM_IS_FAVORITE:
      const changedFilmAdapted = adaptFilmToClient(action.payload);
      const updatedFilms = setFilmForFilms(state.films, changedFilmAdapted);

      return extend(state, {
        films: updatedFilms,
      });

    case ActionType.CHANGE_PROMO_FILM_IS_FAVORITE:
      const changedPromoFilmAdapted = adaptFilmToClient(action.payload);
      const updatedFilmsWithPromoFilm = setFilmForFilms(state.films, changedPromoFilmAdapted);

      return extend(state, {
        films: updatedFilmsWithPromoFilm,
        promoFilm: changedPromoFilmAdapted
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

    case ActionType.LOAD_PROMO_FILM:
      const promoFilm = adaptFilmToClient(action.payload);

      return extend(state, {
        promoFilm,
      });

    case ActionType.SET_REVIEW_SUBMITION_LOADING:
      return extend(state, {
        isReviewSubmitting: action.payload,
      });
  }

  return state;
};

export {filmsData};
