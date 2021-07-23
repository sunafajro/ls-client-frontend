//client actions
export const LOGIN = 'LOGIN';
export const LOGIN_RESET_ERROR_MESSAGE = 'LOGIN_RESET_ERROR_MESSAGE';

export interface ILoginPayload {
    username: string;
    password: string;
}

//server action
export interface ICommonResponse<T>  {
    success: boolean;
    data: T;
}

export interface LoginSuccessData {
    id: string;
    name: string;
    token: string;
}

export interface LoginErrorData {
    code: number;
    message: string;
    name: string;
    status: number;
}
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_ERROR = 'LOGIN_ERROR';
