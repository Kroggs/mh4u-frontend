import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState } from "../store";


export interface AuthState {
    authState: boolean, 
    userProfile: null//usermodel
}

const initialState : AuthState = {
    authState: false,
    userProfile: null
}

const authReducer = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        setAuthState(state: AuthState, action: PayloadAction<boolean>) {
            state.authState = action.payload;
        },
        setUserProfile(state: AuthState, action: PayloadAction<null>) { //change payload to user model
            state.userProfile = action.payload;
        },
    },
});

export const { setAuthState, setUserProfile} = authReducer.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export const selectUserProfile = (state: AppState) => state.auth.userProfile;

export default authReducer.reducer;