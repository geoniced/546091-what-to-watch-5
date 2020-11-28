import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {APIRoute, AppRoute, AuthorizationStatus} from "../../../const";
import {ActionType} from "../../actions";
import {noop} from "../../../test-data/test-data";
import {checkAuth, login} from "../../api-actions";

const api = createAPI(noop);

describe(`user reducer sync operations`, () => {
  it(`user reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: null,
    });
  });

  it(`user reducer should change authorization status`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it(`user reducer should change error message`, () => {
    expect(user({
      error: null,
    }, {
      type: ActionType.SET_ERROR,
      payload: {text: `some error`},
    }))
      .toEqual({
        error: {text: `some error`},
      });
  });
});

describe(`user reducer async operations`, () => {
  it(`should make a correct API call to check auth at: /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{login: true}]);

    return loginLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`should make a correct API call to login at: /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `fakeuser@mail.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{login: true}]);

    return loginLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });
});
