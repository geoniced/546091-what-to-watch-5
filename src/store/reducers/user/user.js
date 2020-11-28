import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../actions";
import {extend} from "../../../utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload,
      });
  }

  return state;
};

export {user};
