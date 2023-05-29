const initialState = {
    TshirtPrice: 8.50,
    watchPrice: 15.99,
    shoePrice: 18.55,
    location: null
};

//add a state update when they is a click to mutate the origin state and use the mutable one.

const shopListReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOCATION" :
            return {
                ...state,
                location: action.payload
            }
        default:
           return state;
    }
}

export default shopListReducer;