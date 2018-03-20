import { React } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Topic" component={Topic} />
      </Router>
    )
  }
}



const Home = () => (
  <div>
    Home Component.
  </div>
)

const About = () => (
  <div>
      About Component.
  </div>
)

const Topic = () => (
  <div>
      Topic Component.
  </div>
)

render(App, document.getElementById("app"));