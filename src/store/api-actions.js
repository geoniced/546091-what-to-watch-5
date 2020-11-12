import {loadFilms, loadReviewsForFilm, redirectToRoute, requireAuthorization} from "./actions";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";

export const fetchFilmList = () => (dispatch, _getStore, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchFilmCard = (filmId) => (dispatch, _getStore, api) => (
  api.get(`${APIRoute.FILMS}/${filmId}`)
);

export const fetchReviewsById = (filmId) => (dispatch, _getStore, api) => (
  api.get(`${APIRoute.COMMENTS}/${filmId}`)
    .then(({data}) => dispatch(loadReviewsForFilm(data)))
);

export const checkAuth = () => (dispatch, _getStore, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getStore, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const submitReview = ({rating, comment, filmId}) => (dispatch, _getStore, api) => (
  api.post(`${APIRoute.COMMENTS}/${filmId}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`${AppRoute.FILMS}/${filmId}`)))
);
