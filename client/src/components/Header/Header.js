import React from 'react';
import styles from './Header.scss';
import { NavItem } from './../NavItem';
import { NavBar } from './../NavBar';
import { HamburguerMenu } from './../HamburguerMenu';

const Header = () => (
  <header className={styles.header}>
    <NavBar>
      <NavItem URL="/">Films</NavItem>
      <NavItem URL="/tv">TV Shows</NavItem>
      <NavItem URL="/books">Books</NavItem>
      <NavItem URL="/dictionary">Words</NavItem>
      <NavItem URL="/stats">Stats</NavItem>
      <HamburguerMenu />
    </NavBar>
  </header>
);

Header.propTypes = {};

export default Header;
