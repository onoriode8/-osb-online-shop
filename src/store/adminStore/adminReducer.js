import * as actionType from "./adminActions/admin-action";

const initialState = {
    id: null,
    token: null,
    email: null,
    mount: false
};

const adminReducer = (state=initialState, action) => {
    switch(action.type) {
        case(actionType.ADMIN_LOGIN) :
            return {
                ...state,
                id: state.id = action.payload.id,
                token: state.token = action.payload.token,
                email: state.email = action.payload.email
            }
        case(actionType.ADMIN_LOGOUT) :
            return {
                ...state,
                id: state.id = null,
                token: state.token = null,
                email: state.email = null
            }
        case("ADMIN_PAGE_MOUNT") :
            return {
                ...state,
                mount: !state.mount
            }
        default: 
            return state;
    }
};

export default adminReducer;