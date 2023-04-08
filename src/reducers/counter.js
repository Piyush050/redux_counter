export const intialState = 0;

export const Counter = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}

export const mulState = 1;

export const multiply = (state = mulState, action) => {
    switch (action.type) {
        case "MULTIPLY": return state * 5;
        case "DIVIDE": return state / 5;
        default: return state;
    }
}
