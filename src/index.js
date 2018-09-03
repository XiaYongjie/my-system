import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import store from "./store/configStores"
import Home from "./containers/homeContainers"
import LoginContainer from "./containers/LoginContainer" 
ReactDOM.render(  
  <Provider  store={store}>
    <Router>
          <div style={{width:'100%',height:'100%'}}>
            <Route path="/" exact component= {LoginContainer}/>
            <Route path="/login" component = {LoginContainer}/>
            <Route path="/home" exact component= {Home}/>
          </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
