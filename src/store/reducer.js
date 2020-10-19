import {ActionType} from "./actions";

const initialState = {
  genre: `all`,
  films: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return state;
    case ActionType.GET_FILMS_BY_GENRE:
      return state;
  }
  return state;
};

export {reducer};
