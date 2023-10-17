import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './reducers/authReducers'

export type AppState = {
    auth: AuthState;
}

export default configureStore( {
    reducer : {
        auth: authReducer,
    },
});