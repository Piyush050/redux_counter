import { multiply, Counter } from "./counter";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    Counter,
    multiply
});

export default rootReducer;
