import React from 'react';
import {HashRouter as Router,Link,Switch,Route,Redirect} from 'react-router-dom'
import Home from './comment/Home.jsx'
import Login from './comment/Login.jsx'
function App() {
  return (
    // 配置Router
    <Router>
        <Switch>
          <Redirect exact path = '/' to = '/login'></Redirect>
          <Route path = "/login" component = {Login}></Route>
          <Route path = "/home" component = {Home}></Route>
        </Switch>
    </Router>
  );
}

export default App;
