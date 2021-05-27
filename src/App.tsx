import React, { FC, ReactElement } from 'react';
import { History } from 'history';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { TRootState } from './store/store';
import './App.css';
import { Router } from './Router';

type TStateProps = {
    isGuest: boolean;
    message: string;
};
type TOwnProps = {
    history: History;
};

type TProps = TStateProps & {} & TOwnProps;

const mapState = (state: TRootState) => ({
    isGuest: state.app.isGuest,
    message: state.app.message,
});

const App: FC<TProps> = ({ history, isGuest, message }): ReactElement => {
    return (
        <ConnectedRouter history={history}>
            <Router isGuest={isGuest} message={message} />
        </ConnectedRouter>
    );
};

export default connect<TStateProps, {}, TOwnProps, TRootState>(
    mapState,
    {}
)(App);
