import {
    ICommonResponse,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_RESET_ERROR_MESSAGE,
    LOGIN_SUCCESS,
    LoginErrorData,
    LoginSuccessData,
} from './actionTypes';

//TODO refactor
export type AppAction = ServerAction;
export type ServerResponse =
    | ICommonResponse<LoginSuccessData>
    | ICommonResponse<LoginErrorData>;

export const login = () => ({
    type: LOGIN,
});
export type ILogin = ReturnType<typeof login>;

export const loginResetErrorMessage = () => ({
    type: LOGIN_RESET_ERROR_MESSAGE,
});
export type ILoginResetErrorMessage = ReturnType<typeof loginResetErrorMessage>;

export const loginSuccess = (response: ICommonResponse<LoginSuccessData>) => ({
    type: LOGIN_SUCCESS,
    response,
});
export type ILoginSuccess = ReturnType<typeof loginSuccess>;

export const loginError = (response: ICommonResponse<LoginErrorData>) => ({
    type: LOGIN_ERROR,
    response,
});
export type ILoginError = ReturnType<typeof loginError>;

export type ServerAction = {
    type: string;
    response: ServerResponse;
};
