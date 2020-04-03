import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import home from '../view/home/index.jsx';
import index from '../view/index/index.jsx';
/**
路由去除地址栏 # 号  ，可参考：https://blog.csdn.net/weixin_42727360/article/details/84105654

 */

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
            <Route exact path="/" component={index}/>
                <Route exact path="/home/:id" component={home}/>
                <Route exact path="/*" component={index}/>
            </Switch>
        </HashRouter>
    );
};

export default Routes;
