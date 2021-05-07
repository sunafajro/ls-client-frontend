import { Provider } from 'react-redux';
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import { Router } from './router';
import './App.css';

type AppProps = {
    history: History;
    isGuest: boolean;
}

const App = ({ history, isGuest }: AppProps) => {
    return (<ConnectedRouter history={history}>
        <Router isGuest={isGuest} />
    </ConnectedRouter>);
}

export default App;
