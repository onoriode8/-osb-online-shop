
const initialState = {
    authentication: false,
    id: null,
    token: null,
    email: null,
    username: null,
    image: null
};

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case("LOGIN"):
            return {
                ...state,
                id: action.payload.id,
                authentication: state.authentication = true,
                token: action.payload.token,
                email: action.payload.email,
                username: action.payload.username,
                image: action.payload.image 
            }
        case("SIGNIN"):
            return {
                ...state,
                id: action.payload.id,
                authentication: state.authentication = true,
                token: action.payload.token,
                email: action.payload.email,
                username: action.payload.username,
                image: action.payload.image 
            }
        case("LOGOUT"):
            return {
                ...state,
                id: action.payload.id,
                authentication: state.authentication = false,
                token: action.payload.token,
                email: action.payload.email,
                username: action.payload.username,
                image: action.payload.image 
            }
        default :
            return state;
    }
};

export default authReducer;