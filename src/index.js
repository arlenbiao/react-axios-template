import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/router';
import './index.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Router/>, document.getElementById('root'));

serviceWorker.unregister();
