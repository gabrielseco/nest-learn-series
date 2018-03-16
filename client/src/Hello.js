import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import styles from './Hello.scss';

const Hello = ({ name }) => (
  <h1 className={styles.title}>
    Hello my name <em>is</em> {name}
  </h1>
);

Hello.propTypes = {
  name: PropTypes.string.isRequired
};

export default hot(module)(Hello);
