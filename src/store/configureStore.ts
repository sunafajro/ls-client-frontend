import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/root.reducer';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export const configureStore = (preloadedState?: any) => {
    const composeEnhancer: typeof compose =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const composedEnhancers = composeEnhancer(
        applyMiddleware(routerMiddleware(history)),
        applyMiddleware(thunk)
    );
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composedEnhancers
    );

    return store;
};
