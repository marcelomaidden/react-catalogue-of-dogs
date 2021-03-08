import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './containers/NavBar';
import Footer from './components/Footer';
import Home from './containers/Home';
import About from './components/About';

ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root'),
);
