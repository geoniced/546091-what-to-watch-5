import {loadFilms, requireAuthorization} from "./actions";
import {AuthorizationStatus} from "../const";

export const fetchFilmList = () => (dispatch, _getStore, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const checkAuth = () => (dispatch, _getStore, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getStore, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
