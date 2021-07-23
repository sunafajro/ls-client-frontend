import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_RESET_ERROR_MESSAGE,
    LOGIN_SUCCESS,
} from '../actions/actionTypes';
import { AppAction, ILoginError } from '../actions/actions';

export type AppState = {
    isGuest: boolean;
    message: string;
    isFetching: boolean;
};

const initialState = { isGuest: true, message: '', isFetching: false };

export function appReducer(
    state: AppState = initialState,
    action: AppAction
): AppState {
    switch (action.type) {
        case LOGIN: {
            state = { ...state, isFetching: true };
            break;
        }
        case LOGIN_SUCCESS: {
            state = { ...state, isGuest: false, isFetching: false };
            break;
        }
        case LOGIN_ERROR: {
            const message = (action as ILoginError).response.data.message;
            state = { ...state, isGuest: true, message, isFetching: false };
            break;
        }
        case LOGIN_RESET_ERROR_MESSAGE:
            state = { ...state, message: '' };
            break;
    }
    return state;
}
