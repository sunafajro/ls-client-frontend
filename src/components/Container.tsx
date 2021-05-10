import React, { FC, ReactElement } from 'react';

export const Container: FC = ({children}): ReactElement => {
    return <div className="container">{children}</div>;
};
