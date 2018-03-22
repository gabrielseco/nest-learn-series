import React from 'react';
import PropTypes from 'prop-types';
import styles from './HamburguerMenu.scss';

const HamburguerMenu = ({ open }) => (
  <div className={styles.hamburguerMenu}>HOLA NICO {open}</div>
);

HamburguerMenu.propTypes = {
  open: PropTypes.bool
};

export default HamburguerMenu;
