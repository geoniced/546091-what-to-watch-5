import {NameSpace} from "../store/reducers/root-reducer";
import {AuthorizationStatus} from "../const";
import configureStore from "redux-mock-store";
import {filmListMock} from "./test-data";

const configuredStore = configureStore([]);
const mockedStore = configuredStore({
  [NameSpace.DATA]: {
    activeGenre: `All genres`,
    films: filmListMock,
    shownFilmsCount: 8,
    isLoading: false,
    promoFilm: filmListMock[0],
    isReviewSubmitting: false,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    error: null,
  }
});

export {mockedStore};
