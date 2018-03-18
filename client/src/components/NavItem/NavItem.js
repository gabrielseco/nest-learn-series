import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavItem.scss';

const NavItem = ({ URL, children }) => (
  <li className={styles.navItem}>
    <Link className={styles.navLink} to={URL}>
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired
};

export default NavItem;
