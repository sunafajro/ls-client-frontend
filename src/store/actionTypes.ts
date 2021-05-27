//client actions
export const LOGIN = "LOGIN";

export interface ILoginPayload {
    username: string;
    password: string;
}

//server action

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export interface ILoginSuccessResponse {
    success: boolean;
    data: {
        id: string;
        name: string;
        token: string;
    }
}

export const LOGIN_ERROR = "LOGIN_ERROR";
export interface ILoginErrorResponse {
    success: boolean;
    data: {
        code: number;
        message: string;
        name: string;
        status: number;

    }
}