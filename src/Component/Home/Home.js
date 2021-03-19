import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from '../Header/Header';
import Landing from '../Landing/Landing';

const Home = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/">
                        <Landing></Landing>
                    </Route>
                    <Route path="/home">
                        <Landing></Landing>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;