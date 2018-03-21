import React from 'react';
import PropTypes from 'prop-types';
import styles from './OverlayMenu.scss';

const OverlayMenu = ({ open }) => (
  <div className={styles.overlayMenu}>
    <h2>is {open} ?</h2>
  </div>
);

OverlayMenu.propTypes = {
  open: PropTypes.bool.isRequired
};

export default OverlayMenu;
