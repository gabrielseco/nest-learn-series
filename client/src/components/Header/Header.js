import React from 'react';
import styles from './Header.scss';
import { NavItem } from './../NavItem';
import { NavBar } from './../NavBar';

const Header = () => (
  <header className={styles.header}>
    <NavBar>
      <NavItem URL="/">Films</NavItem>
      <NavItem URL="/tv">TV Shows</NavItem>
      <NavItem URL="/books">Books</NavItem>
      <NavItem URL="/dictionary">Words</NavItem>
      <NavItem URL="/stats">Stats</NavItem>
    </NavBar>
  </header>
);

Header.propTypes = {};

export default Header;
