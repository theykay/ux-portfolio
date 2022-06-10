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
          <h1>theyKay</h1>
        </Link>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-link" to="/about">about</Link>
          </li>
          <li className="nav-li  dd-trigger">
            <Link className="nav-link" to="/work">work</Link>
            {/* dropdown menu */}
            {/* <ul className="dd-nav">
              <li className="dd-item">
                <Link className="dd-link" to="/ux">ux case studies</Link>
              </li>
              <li className="dd-item">
                <Link className="dd-link" to="/other">other</Link>
              </li>
            </ul> */}
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/resume">resumé</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;