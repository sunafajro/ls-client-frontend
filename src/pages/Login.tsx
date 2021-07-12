import React, { FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { TRootState } from '../store/store';
import { PasswordInput, TextInput } from '../components/FormInput';
import { ILoginPayload } from '../store/actionTypes';
import { ThunkDispatch } from 'redux-thunk';
import { thunkLogin } from '../store/services/login-service';
import { loginResetErrorMessage } from '../store/actions';

type TStateProps = {
    message: string;
};

type TDispatchProps = {
    login: (payload: ILoginPayload) => void;
    loginResetErrorMessage: () => void;
};

const mapState = (state: TRootState) => ({
    message: state.app.message,
});

type TProps = TStateProps & TDispatchProps & {};

const mapDispatch = (dispatch: ThunkDispatch<{}, {}, any>): TDispatchProps => {
    return {
        loginResetErrorMessage: () => {
            dispatch(loginResetErrorMessage());
        },
        login: async ({ username, password }) => {
            await dispatch(thunkLogin({ username, password }));
        },
    };
};

const Login: FC<TProps> = ({
    message,
    login,
    loginResetErrorMessage,
}): ReactElement => {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [formError, updateFormError] = useState('');

    if (!!message && formError !== message) {
        updateFormError(message);
    }

    const validateForm = () => {
        loginResetErrorMessage();
        if (!username) {
            updateFormError('Необходимо заполнить имя пользователя.');
        } else if (!password) {
            updateFormError('Необходимо заполнить пароль.');
        } else {
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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
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
