import { combineReducers } from 'redux';

import loginReducer from './userLogIn/loginReducer';
import workoutReducer from './workout/workoutReducer'

const rootReducer = combineReducers({
    loginReducer,
    workoutReducer
});


export default rootReducer;