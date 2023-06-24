// import * as shopActionType from "../actions/shopAction";
import { LOCATION, BAG_INCREMENT, BAG_DECREMENT } from "../actions/shopAction";


const initialState= {
    location: null,
    bagData: {
        bagPrice: 10.22,
        bagCartQuanty: 0,
        deliveryFee: 0.00
    },
    watchPrice: 15.99,
    shoePrice: 18.55
};


const shopReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOCATION :
            return {
                ...state,
                location: state.location = action.payload
            }
        case BAG_INCREMENT : 
            return {
                ...state,
                bagCartQuanty: state.bagData.bagCartQuanty += action.payload
            }
        case BAG_DECREMENT :
            return {
                ...state,
                bagCartQuanty: state.bagData.bagCartQuanty -= action.payload
            }
        default:
            return state;
    }
};

export default shopReducer; 