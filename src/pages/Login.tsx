import React, { FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { TRootState } from '../store/store';
import { PasswordInput, TextInput } from '../components/FormInput';
import { ILoginPayload } from '../store/actionTypes';
import { ThunkDispatch } from 'redux-thunk';
import { thunkLogin } from '../store/services/login-service';

type TStateProps = {
    message: string;
};

type TDispatchProps = {
    login: (payload: ILoginPayload) => void;
};

const mapState = (state: TRootState) => ({
    message: state.app.message,
});

type TProps = TStateProps & TDispatchProps & {};

const mapDispatch = (dispatch: ThunkDispatch<{}, {}, any>): TDispatchProps => {
    return {
        login: async ({ username, password }) => {
            await dispatch(thunkLogin({ username, password }));
        },
    };
};

const Login: FC<TProps> = ({ message, login }): ReactElement => {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [formError, updateFormError] = useState('');
    const [serverError, updateServerError] = useState('');
    const [initialState, setInitialState] = useState(true);

    if (!!message && serverError!== message && !initialState) {
        updateServerError(message);
    }

    const validateForm = () => {
        if (!username) {
            updateFormError('Необходимо заполнить имя пользователя.');
        } else if (!password) {
            updateFormError('Необходимо заполнить пароль.');
        } else {
            setInitialState(false);
            updateFormError('');
            return true;
        }
        return false;
    };

    return (
        <div>
            <h1>Login</h1>
            {formError && (
                <div className="alert alert-danger" role="alert">
                    {formError}
                </div>
            )}
            {serverError && (
                <div className="alert alert-danger server-error" role="alert">
                    {serverError}
                </div>
            )}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    updateServerError('');
                    setInitialState(true);
                    if (validateForm()) {
                        login({ username, password });
                    }
                }}
            >
                <TextInput
                    label="Имя пользователя"
                    updateValue={updateUsername}
                    value={username}
                />
                <PasswordInput
                    label="Пароль"
                    updateValue={updatePassword}
                    value={password}
                />
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="inputCheckbox"
                    />
                    <label className="form-check-label" htmlFor="inputCheckbox">
                        Запомнить меня
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Войти
                </button>
            </form>
        </div>
    );
};

export default connect<TStateProps, TDispatchProps, {}, TRootState>(
    mapState,
    mapDispatch
)(Login);
