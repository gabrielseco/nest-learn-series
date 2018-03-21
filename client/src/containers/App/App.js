import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Header, OverlayMenu } from './../../components';
/* import PropTypes from 'prop-types';
import styles from './App.scss'; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false
    };
  }

  render() {
    return (
      <div>
        <Header />
        <OverlayMenu open={this.state.isMenuActive} />
      </div>
    );
  }
}

App.propTypes = {};

export default hot(module)(App);
