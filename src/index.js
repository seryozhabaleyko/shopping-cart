import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from 'store';
import Routes from 'routes';
import Header from 'components/header';
import Footer from 'components/footer';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <Footer />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);