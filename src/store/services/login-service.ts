import {
    ILoginErrorResponse,
    ILoginPayload,
    ILoginSuccessResponse,
} from '../actionTypes';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { login, loginError, loginSuccess } from '../actions';
import { TRootState } from '../store';

const endPoint = 'https://api.language-school.ru/client/auth/login';

export const api = (data: ILoginPayload) =>
    fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response.json());
    });

//todo export type

export const thunkLogin = (
    data: ILoginPayload
): ThunkAction<void, TRootState, unknown, AnyAction> => async (dispatch) => {
    try {
        dispatch(login);
        const response = await api(data);
        dispatch(loginSuccess(response as ILoginSuccessResponse));
    } catch (err) {
        const error = (await err) as ILoginErrorResponse;
        console.error('Ошибка:', error);
        dispatch(loginError(error));
    }
};
