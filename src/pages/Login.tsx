import React, { FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { TRootState } from '../store/store';
import { login } from '../store/actions';
import { PasswordInput, TextInput } from '../components/FormInput';

type TDispatchProps = {
    login: (username: string, password: string) => void
};

type TProps = {} & TDispatchProps & {};

const mapDispatch = {
    login,
};

const Login: FC<TProps> = ({ login }): ReactElement => {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [formError, updateFormError] = useState('');

    const validateForm = () => {
        if (!username) {
            updateFormError('Необходимо заполнить имя пользователя.');
        }
        if (!password) {
            updateFormError('Необходимо заполнить пароль.');
        }

        return !formError.length;
    };

    return (
        <div>
            <h1>Login</h1>
            {formError ? (
                <div className="alert alert-danger" role="alert">
                    {formError}
                </div>
            ) : (
                ''
            )}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (validateForm()) {
                        login(username, password);
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

export default connect<{}, TDispatchProps, {}, TRootState>(null, mapDispatch)(Login);
