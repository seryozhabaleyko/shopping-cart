import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Phones from './pages/phones';
import Phone from './pages/phone';
import Basket from './pages/basket';

function App() {

    return (
        <>
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <Phones/>
                </Route>
                <Route path='/categories/:id'>
                    <Phones/>
                </Route>
                <Route path='/phone/:id'>
                    <Phone/>
                </Route>
                <Route path='/basket'>
                    <Basket/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;