import actionTypes from "./reducers/authReducer";
import { auth, provider } from "../firebase";


const fetchUsers = () => {
  return function(dispatch) {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result,actionTypes.SET_USER);
        dispatch({
          type : "SET_USER",
          payload : result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export default fetchUsers;
