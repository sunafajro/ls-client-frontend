import React, { FC, ReactElement } from 'react';
import { History } from 'history';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { TRootState } from './store/store';
import './App.css';
import { Router } from './Router';

type TStateProps = {
    isGuest: boolean;
};
type TOwnProps = {
    history: History;
};

type TProps = TStateProps & {} & TOwnProps;

const mapState = (state: TRootState) => ({
    isGuest: state.app.isGuest,
});

const App: FC<TProps> = ({ history, isGuest }): ReactElement => {
    return (
        <ConnectedRouter history={history}>
            <Router isGuest={isGuest} />
        </ConnectedRouter>
    );
};

export default connect<TStateProps, {}, TOwnProps, TRootState>(
    mapState,
    {}
)(App);
