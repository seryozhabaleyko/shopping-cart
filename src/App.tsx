import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './containers/CatalogContainer';
import Product from './containers/ProductContainer';
import Cart from './pages/Cart';

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/catalog" />
                </Route>
                <Route path="/catalog">
                    <Catalog />
                </Route>
                <Route path="/product/:id">
                    <Product />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
