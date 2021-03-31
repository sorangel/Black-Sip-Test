import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import cartReducer from "./cart";
import middlewares from "./middlewares";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  cart: cartReducer,
});

export default createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares))
);
