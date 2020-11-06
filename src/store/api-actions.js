import {loadFilms} from "./actions";

export const fetchFilmList = () => (dispatch, _getStore, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)))
);
