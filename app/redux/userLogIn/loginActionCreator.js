import * as actionTypes from './loginActionTypes';
import traineeAuthApi from '../../api/traineeAuthApi';
import * as SecureStore from 'expo-secure-store';
import * as RootNavigation from '../../routes/Rootnavigatioon';


export const logInSuccess = (token) => {
    console.log("from Function", token)
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: token
    }
}


export const tryLogIn = (data) => dispatch => {
    console.log("FRom ActionCreator", data)
    traineeAuthApi.traineeLogIN(data)
        .then(res => {
            const token = JSON.stringify(res.data.token);
            SecureStore.setItemAsync('secure_token', token);
            SecureStore.getItemAsync('secure_token')
                .then(token => {
                    dispatch(logInSuccess(token))
                    RootNavigation.navigate("home")
                });
        })
        .catch(err => console.log(err))
}