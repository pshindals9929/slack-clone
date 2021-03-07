import {LOGOUT} from "./types";
import { auth, provider } from "../../firebase";
import {SET_USER} from "./types"


const fetchUsers = () => {
  return function(dispatch) {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type : SET_USER,
          payload : result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export default fetchUsers;


export const logout = () => (dispatch) => {
  localStorage.removeItem("state");
  dispatch({
    type: LOGOUT,
  });
};






