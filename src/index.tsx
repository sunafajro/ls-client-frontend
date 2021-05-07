import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { history } from './store/configureStore';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootState = store.getState();

ReactDOM.render(
    <Provider store={store}>
        <App history={history} isGuest={rootState.app.isGuest} />
    </Provider>,
    document.getElementById('root')
);
