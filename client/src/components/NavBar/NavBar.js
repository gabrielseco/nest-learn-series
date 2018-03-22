import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.scss';

const NavBar = ({ children }) => (
  <nav className={styles.navBar}>{children}</nav>
);

NavBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

export default NavBar;
