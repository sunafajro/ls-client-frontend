import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
} from '../actionTypes';
import {AppAction, ILoginError} from '../actions';

export type AppState = {
    isGuest: boolean;
    message: string;
};

const initialState = { isGuest: true, message: '' };

export function appReducer(
    state: AppState = initialState,
    action: AppAction
): AppState {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            state = {...state, isGuest: false};
            break;
        }
        case LOGIN_ERROR: {
            const message = (action as ILoginError).response.data.message;
            state = {...state, isGuest: true, message};
        }
    }
    return state;
}
