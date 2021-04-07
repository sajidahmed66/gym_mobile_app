import * as actionTypes from './loginActionTypes';

const initState = {
    isLogedIn: false,
    isLoggingIn: false,
    token: null,
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLogedIn: true,
                token: action.payload
            }
        default:
            return state
    }
};


export default loginReducer;