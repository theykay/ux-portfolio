import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-foot">
      <ul className="foot-nav">
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li>
          <Link to="/connect">connect</Link>
        </li>
      </ul>
      <h5>&#169;Kay Murray</h5>
    </footer>
  );
};

export default Footer;