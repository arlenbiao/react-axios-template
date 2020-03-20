import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import nav from '../view/nav/index.jsx';
import home from '../view/home/index.jsx';


const Routes = () => {
    return (
        <HashRouter>
            <Switch>
            <Route exact path="/" component={nav}/>
                <Route exact path="/home" component={home}/>
                <Route exact path="/*" component={nav}/>
            </Switch>
        </HashRouter>
    );
};

export default Routes;
