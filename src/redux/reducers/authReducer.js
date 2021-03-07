import { LOGOUT, SET_USER } from "../actions/types";

export const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
