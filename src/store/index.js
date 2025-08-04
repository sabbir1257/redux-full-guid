import { combineReducers, createStore } from "redux";

const cardReducer = (state = {}, action) => {
    return state;
}

const rootReducer = combineReducers({
    cart: cardReducer
})

const store = createStore(rootReducer)


export default store;