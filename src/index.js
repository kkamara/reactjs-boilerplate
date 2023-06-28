import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './layout/App';
import reducer from './store/reducer';
import config from './config';
import './assets/scss/style.scss';
import * as serviceWorker from './serviceWorker';

import $ from'jquery'
import Popper from'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import reportWebVitals from './reportWebVitals'

import { GoogleOAuthProvider } from '@react-oauth/google'

const store = createStore(reducer);

ReactDOM.render(
    <GoogleOAuthProvider clientId="900577447575-chnn3od0mtrepikfe7jkmla78cgc6e8t.apps.googleusercontent.com">
        <Provider store={store}>
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>
        </Provider>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
reportWebVitals()