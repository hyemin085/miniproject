import React from "react";
import './App.scss';
import {BrowserRouter as Router, HashRouter, Route, Switch} from "react-router-dom";
import {AnimatePresence} from "framer-motion";


import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Singup from "./components/Singup/Singup";
import Footer from "./components/Footer/Footer";
import ChangeName from "./components/ChangeUser/ChangeName";



import { ConnectedRouter } from "connected-react-router";
import {history} from "./redux/history";



function App() {
  return (
    <>
    <div className="App">

<Router>
<Header></Header>
  <Router>
  <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/singup" exact component={Singup} />
          <Route path="/naver" component={Home}/>
          <Route path="/changename" exact component={ChangeName}/>
          <Route path="/*" component={Home}/>


        </Switch>
  </ConnectedRouter>
  </Router>
<Footer/>
</Router>

    </div>
    </>
  );
}

export default App;
