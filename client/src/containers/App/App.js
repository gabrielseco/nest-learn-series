import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Header } from './../../components';
/* import PropTypes from 'prop-types';
import styles from './App.scss'; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

App.propTypes = {};

export default hot(module)(App);
