import React from 'react';
import './Header.css';
// import logo from './content/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <section>
          {/* <img src={logo} alt="" /> */}
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