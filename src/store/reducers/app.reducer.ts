import { LOGIN } from '../actionTypes';

type AppState = {
    isGuest: boolean;
};

type AppAction = {
    type: string;
};

const initialState = { isGuest: true };

export function appReducer(
    state: AppState = initialState,
    action: AppAction
): AppState {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isGuest: false,
            };
        }
        default:
            return state;
    }
}
