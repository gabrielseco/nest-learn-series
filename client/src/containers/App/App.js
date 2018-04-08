import React, { Component, StrictMode } from 'react';
import { Header, OverlayMenu } from 'Components';
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
      <StrictMode>
        <div>
          <Header />
          <OverlayMenu open={this.state.isMenuActive} />
        </div>
      </StrictMode>
    );
  }
}

App.propTypes = {};

export default App;
