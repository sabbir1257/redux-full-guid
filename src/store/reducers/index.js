import cardReducer from "./cart";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  cart: cardReducer,
});

export default rootReducer;