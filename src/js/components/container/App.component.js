import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';

import Header from 'views/Header.view';
import Footer from 'views/Footer.view';
import Home from 'views/Home.view';
import Contact from 'views/Contact.view';

const Loading = () => <h1>loading...</h1>;

const AboutAsync = loadable( {
    loader: () => import( 'views/About.view' ),
    loading: Loading
} );

export const App = function() {
    return (
        <Router>
            <div>
                <Header />
                
                <Switch>
                    <Route exact={ true } path='/' component={ Home } />
                    <Route exact={ false } path='/about' component={ AboutAsync } />
                    <Route exact={ false } path='/contact' component={ Contact } />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
};
