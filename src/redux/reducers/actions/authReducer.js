export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

export function setuser() {
  return {
    type: "SET_USER",
    payload: null
  };
}

const authReducer = (state=initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
};

export default authReducer;
