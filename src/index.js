import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import store from "./store/configStores"
import Home from "./pages/home/homePage"
import Login from "./pages/login/login" 
ReactDOM.render(  
  <Provider store={store}>
    <Router>
          <Route path="/" component= {Home}/>
          <Route path="/login" component = {Login}/>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
