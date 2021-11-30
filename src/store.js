import { Store, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;