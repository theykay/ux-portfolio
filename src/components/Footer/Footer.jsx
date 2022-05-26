import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="main-foot">
      {/* <ul className="foot-nav">
        <li>
          <Link className="foot-link" to="/about">about</Link>
        </li>
        <li>
          <Link className="foot-link" to="/work">work</Link>
        </li>
        <li>
          <Link clasName="foot-link" to="/connect">connect</Link>
        </li>
      </ul> */}
      <h5>&#169;Kay Murray</h5>
    </footer>
  );
};

export default Footer;