import React, { FC, ReactElement } from 'react';

type TInputProps = {
    id?: string;
    type: string;
    value: string;
    updateValue: (value: string) => void;
};

type TProps = {
    id?: string;
    label: string;
    value: string;
    updateValue: (value: string) => void;
};

const Input: FC<TInputProps> = ({
    id,
    type,
    value,
    updateValue,
}): ReactElement => {
    return (
        <input
            type={type ? type : 'text'}
            className="form-control"
            id={id ? id : ''}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => updateValue(e.target.value)}
            value={value}
        />
    );
};

export const PasswordInput: FC<TProps> = ({
    id,
    label,
    value,
    updateValue,
}): ReactElement => {
    return (
        <div className="mb-3">
            <label htmlFor={id ? id : 'password-input'} className="form-label">
                {label}
            </label>
            <Input
                type="password"
                id={id ? id : 'password-input'}
                updateValue={updateValue}
                value={value}
            />
        </div>
    );
};

export const TextInput: FC<TProps> = ({
    id,
    label,
    value,
    updateValue,
}): ReactElement => {
    return (
        <div className="mb-3">
            <label htmlFor={id ? id : 'text-input'} className="form-label">
                {label}
            </label>
            <Input
                type="text"
                id={id ? id : 'text-input'}
                updateValue={updateValue}
                value={value}
            />
        </div>
    );
};
