import React from 'react';
import './Header.css';
import logo from '../../content/logo.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <section className="nav-section">
          <img className="logo" src={logo} alt="logo" />
          <h1>Kay Murray</h1>
        </section>
        <ul>
          <li>work</li>
          <li>about</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;