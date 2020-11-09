import {combineReducers} from "redux";
import {filmsData} from "./films-data/films-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.USER]: user,
});
