const initialState= {
    bagPrice: 10.22,
    watchPrice: 15.99,
    shoePrice: 18.55
};


const shopReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default shopReducer; 