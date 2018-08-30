import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import store from "./store/configStores"
import Home from "./pages/home/homePage"
import Login from "./pages/login/login" 
ReactDOM.render(  
  <Provider  store={store}>
    <Router>
          <div style={{width:'100%',height:'100%'}}>
            <Route path="/" exact component= {Home}/>
            <Route path="/login" component = {Login}/>
          </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
