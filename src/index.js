import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App" 
import authReducer from "./redux/reducers/authReducer"
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveState, loadState } from "./components/localStorage";
 

const persistedState = loadState();
const store = createStore(
  authReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

