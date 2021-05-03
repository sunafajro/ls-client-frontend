type AppState = {
    main: string;
}

type AppAction = {
    type: string;
}

const initialState = {main: "Главная"}

export function appReducer(state: AppState = initialState, action: AppAction): AppState {
    return state;
}