import React, { FC, ReactElement } from 'react';
import { History } from 'history';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { TRootState } from './store/store';
import './App.css';
import { Router } from './Router';
import { AppState } from './store/reducers/app.reducer';

type TStateProps = AppState;

type TOwnProps = {
    history: History;
};

type TProps = TStateProps & {} & TOwnProps;

const mapState = (state: TRootState) => ({
    isGuest: state.app.isGuest,
    message: state.app.message,
    isFetching: state.app.isFetching,
});

const App: FC<TProps> = ({
    history,
    isGuest,
    message,
    isFetching,
}): ReactElement => {
    return (
        <ConnectedRouter history={history}>
            <Router
                isGuest={isGuest}
                message={message}
                isFetching={isFetching}
            />
        </ConnectedRouter>
    );
};

export default connect<TStateProps, {}, TOwnProps, TRootState>(
    mapState,
    {}
)(App);
