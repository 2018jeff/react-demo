import React from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Card from './pages/Card/Card.react';
export default class App extends React.Component {
  render() {
    const supportsHistory = 'pushState' in window.history
    return (
      <div>
        <header> Welcome the react world </header>
        <Router basename="bind"  forceRefresh={!supportsHistory}>
          <div>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/car">Card</Link>
            </ul>
            <Route  exact path="/" component={Card} />
            <Route path="/car" component={Card} />
          </div>
        </Router>
      </div>
    )
  }
}

