import React,{Fragment} from "react";
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Singup from "./components/Singup/Singup";


import { ConnectedRouter } from "connected-react-router";
import {history} from "./redux/store";


function App() {
  return (
    <>
    <div className="App">
<Router>
<Header></Header>
  <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/singup" exact component={Singup} />
        </Switch>
  </ConnectedRouter>
</Router>
    </div>
    </>
  );
}

export default App;
