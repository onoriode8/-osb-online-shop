const initialState = {
    TshirtPrice: 8.50,
    watchPrice: 15.99,
    shoePrice: 18.55
};

//add a state update when they is a click to mutate the origin state and use the mutable one.

const shopListReducer = (state=initialState, action) => {
    switch(action.type) {
        case "" :
            return {
                ...state,
            }
        default:
           return state;
    }
}

export default shopListReducer;