import { LOGIN } from './actionTypes';

export const login = (username: string, password: string) => ({
    type: LOGIN,
    payload: {username, password}
});
