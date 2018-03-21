import React from 'react';


import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home.react';

import Log from './pages/Log/Log.react';
export default class App extends React.Component {
  render() {
    const supportsHistory = 'pushState' in window.history
    return (
      <div>
        <header> Welcome the react world </header>
        <Router basename="app"  forceRefresh={!supportsHistory}>
          <div>
            <ul>
              <Link to="/">Home</Link>
              <Link to="log">log</Link>
            </ul>
            <Route  exact path="/" component={Home} />
            <Route path="/log" component={Log} />
          </div>
        </Router>
      </div>
    )
  }
}

