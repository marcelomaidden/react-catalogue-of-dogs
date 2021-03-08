import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './containers/NavBar';
import Footer from './components/Footer';
import App from './App';

ReactDOM.render(
  <>
    <NavBar />
    <App />
    <Footer />
  </>,
  document.getElementById('root')
);
