
import * as shopActionType from "../actions/shopAction";


const initialState= {
    location: null,
    bagData: {
        bagPrice: 10.22,
        bagCartQuanty: 0,
        deliveryFee: 0.00
    },
    pressingIronData: {
        pressingIronPrice: 6.57,
        pressingIronCartQuanty: 0,
        deliveryFee: 0.00
    },
    blenderData: {
        blenderPrice: 19.75,
        blenderCartQuanty: 0,
        deliveryFee: 0.00
    }
};


const shopReducer = (state=initialState, action) => {
    switch(action.type) {
        case(shopActionType.LOCATION):
            return {
                ...state,
                location: state.location = action.payload
            }
        case(shopActionType.BAG_INCREMENT): 
            return {
                ...state,
                bagCartQuanty: state.bagData.bagCartQuanty += action.payload
            }
        case(shopActionType.BAG_DECREMENT):
            return {
                ...state,
                bagCartQuanty: state.bagData.bagCartQuanty -= action.payload
            }
        case(shopActionType.PRESSING_IRON_INCREMENT): 
            return {
                ...state,
                pressingIronCartQuanty: state.pressingIronData.pressingIronCartQuanty += action.payload
            }
        case(shopActionType.PRESSING_IRON_DECREMENT):
            return {
                ...state,
                pressingIronCartQuanty: state.pressingIronData.pressingIronCartQuanty -= action.payload
            }

        case(shopActionType.BLENDER_INCREMENT): 
            return {
                ...state,
                blenderCartQuanty: state.blenderData.blenderCartQuanty += action.payload
            }
        case(shopActionType.BLENDER_DECREMENT):
            return {
                ...state,
                blenderCartQuanty: state.blenderData.blenderCartQuanty -= action.payload
            }
        default:
            return state;
    }
};

export default shopReducer; 