import {combineReducers} from "redux";
import {filmsData} from "./films-data/films-data";

export const NameSpace = {
  DATA: `DATA`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
});
