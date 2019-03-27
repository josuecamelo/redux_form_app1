import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import cfgStore from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./containers/App";

const store = cfgStore();

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <App />
            </div>
        </div>
    </Provider>,
    document.getElementById('root'));

//registerServiceWorker();
serviceWorker.unregister();
