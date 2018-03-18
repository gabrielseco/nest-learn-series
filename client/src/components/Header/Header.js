import React from 'react';
import styles from './Header.scss';
import { NavItem } from './../NavItem';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.container}>
      <NavItem URL="/">Films</NavItem>
      <NavItem URL="/tv">TV Shows</NavItem>
      <NavItem URL="/books">Books</NavItem>
      <NavItem URL="/dictionary">Words</NavItem>
      <NavItem URL="/stats">Stats</NavItem>
    </nav>
  </header>
);

Header.propTypes = {};

export default Header;
