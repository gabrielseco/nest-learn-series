import React, { Component } from 'react';
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

  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        isMenuActive: true
      };
    });
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

export default App;
