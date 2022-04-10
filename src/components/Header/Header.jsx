import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../content/logo.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <Link className="nav-section" to="/">
          <img className="logo" src={logo} alt="logo" />
          <h1>Kay Murray</h1>
        </Link>
        <ul className="nav-ul">
          <li>
            <Link className="nav-link" to="/about">about</Link>
          </li>
          <li>
            <Link className="nav-link" to="/work">work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;