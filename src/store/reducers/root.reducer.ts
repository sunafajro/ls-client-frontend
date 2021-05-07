import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';
import { appReducer } from './app.reducer';

const createRootReducer = (history: History) =>
    combineReducers({
        app: appReducer,
        router: connectRouter(history),
    });

export interface State {
    router: RouterState;
}

export default createRootReducer;