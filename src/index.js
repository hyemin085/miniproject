import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Router} from "react-router-dom";
import {history} from "./redux/history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


