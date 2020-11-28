import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {filmsData} from "./films-data";
import {ALL_GENRES_FILTER, APIRoute, AppRoute, EMPTY_FILM} from "../../../const";
import {ActionType} from "../../actions";
import {filmListMock, noop} from "../../../test-data/test-data";
import {filmsFromServer} from "../../../test-data/server-data";
import {fetchFilmList, fetchPromoFilm, fetchReviewsById, submitMyListFilmStatus, submitReview} from "../../api-actions";
import {adaptFilmToClient, extend, setFilmForFilms} from "../../../utils";

const api = createAPI(noop);

const apiMock = new MockAdapter(api);

const mockReviewFromServer = [
  {
    "id": 1,
    "user": {
      "id": 4,
      "name": `Kate Muir`
    },
    "rating": 8.9,
    "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    "date": `2019-05-08T14:13:56.569Z`
  }
];

describe(`filmsData reducer sync operations`, () => {
  it(`filmsData reducer without additional parameters should return initial state`, () => {
    expect(filmsData(undefined, {})).toEqual({
      activeGenre: ALL_GENRES_FILTER,
      films: [],
      shownFilmsCount: 0,
      isLoading: true,
      currentFilmReviews: [],
      promoFilm: EMPTY_FILM,
      isReviewSubmitting: false,
    });
  });

  it(`filmsData reducer should change genre`, () => {
    expect(filmsData({
      activeGenre: ALL_GENRES_FILTER,
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Action`,
    }))
      .toEqual({
        activeGenre: `Action`
      });
  });

  it(`filmsData reducer should increase shown films`, () => {
    expect(filmsData({
      films: filmListMock,
      shownFilmsCount: 8,
    }, {
      type: ActionType.INCREASE_SHOWN_FILM_CARDS,
    }))
      .toEqual({
        films: filmListMock,
        shownFilmsCount: 10,
      });
  });

  it(`filmsData reducer should reset shown films`, () => {
    expect(filmsData({
      films: filmListMock,
      shownFilmsCount: 10,
    }, {
      type: ActionType.RESET_SHOWN_FILM_CARDS,
    }))
      .toEqual({
        films: filmListMock,
        shownFilmsCount: 8,
      });

    expect(filmsData({
      films: filmListMock,
      shownFilmsCount: 10000,
    }, {
      type: ActionType.RESET_SHOWN_FILM_CARDS,
    }))
      .toEqual({
        films: filmListMock,
        shownFilmsCount: 8,
      });
  });

  it(`filmsData reducer should load films`, () => {
    expect(filmsData({
      films: [],
      shownFilmsCount: 8,
      isLoading: false,
    }, {
      type: ActionType.LOAD_FILMS,
      payload: filmsFromServer,
    }))
      .toEqual({
        films: filmListMock,
        shownFilmsCount: 8,
        isLoading: false,
      });
  });

  it(`filmsData reducer should load films`, () => {
    expect(filmsData({
      currentFilmReviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS_FOR_FILM,
      payload: {
        reviews: mockReviewFromServer,
      },
    }))
      .toEqual({
        currentFilmReviews: [{
          date: `2019-05-08T14:13:56.569Z`,
          filmRating: 8.9,
          id: 1,
          text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          userId: 4,
          userName: `Kate Muir`,
        }],
      });
  });

  it(`filmsData reducer should load promo film`, () => {
    expect(filmsData({
      promoFilm: EMPTY_FILM,
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: filmsFromServer[0],
    }))
      .toEqual({
        promoFilm: filmListMock[0],
      });
  });

  it(`filmsData reducer should change isFavorite property of the film`, () => {
    const favoriteFilm = extend(filmsFromServer[0], {"is_favorite": true});
    const filmsWithFavoriteFilm = setFilmForFilms(filmListMock, adaptFilmToClient(favoriteFilm));

    expect(filmsData({
      films: filmListMock
    }, {
      type: ActionType.CHANGE_FILM_IS_FAVORITE,
      payload: favoriteFilm,
    }))
      .toEqual({
        films: filmsWithFavoriteFilm,
      });
  });

  it(`filmsData reducer should change isReviewSubmitting property of the state`, () => {
    expect(filmsData({
      isReviewSubmitting: false,
    }, {
      type: ActionType.SET_REVIEW_SUBMITION_LOADING,
      payload: true,
    }))
      .toEqual({
        isReviewSubmitting: true,
      });
  });
});

describe(`filmsData reducer async operations`, () => {
  it(`should make a correct API call to /films`, () => {
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, filmsFromServer);

    return filmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: filmsFromServer,
        });
      });
  });

  it(`should make a correct API call to get a review: GET /comments/:id`, () => {
    const dispatch = jest.fn();
    const filmId = 1;
    const commentsLoader = fetchReviewsById(filmId);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${filmId}`)
      .reply(200, mockReviewFromServer);

    return commentsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS_FOR_FILM,
          payload: {
            reviews: mockReviewFromServer,
            filmId,
          },
        });
      });
  });

  it(`should make a correct API call to submit a review: POST /comments/:id`, () => {
    const dispatch = jest.fn();
    const filmId = 1;
    const submitReviewLoader = submitReview({
      rating: 5,
      comment: `nice movie`,
      filmId
    });

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${filmId}`)
      .reply(200, mockReviewFromServer);

    return submitReviewLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `${AppRoute.FILMS}/${filmId}`,
        });
      });
  });

  it(`should make a correct API call to /films/promo`, () => {
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(`${APIRoute.FILMS}/promo`)
      .reply(200, filmsFromServer[0]);

    return promoFilmLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: filmsFromServer[0],
        });
      });
  });

  it(`should make a correct API call to /favorite/:id/:status`, () => {
    const dispatch = jest.fn();
    const filmId = 1;
    const isFavorite = 1;
    const myListFilmStatusLoader = submitMyListFilmStatus(filmId, isFavorite);
    const filmWithIsFavoriteEqTrue = extend(filmsFromServer[0], {"is_favorite": true});

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${filmId}/${isFavorite}`)
      .reply(200, filmWithIsFavoriteEqTrue);


    return myListFilmStatusLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FILM_IS_FAVORITE,
          payload: filmWithIsFavoriteEqTrue,
        });
      });
  });
});
