import React from "react";
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { 
  faGithubSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="about-content">
      <article>
        <h1>About Me</h1>
        <p></p>
      </article>
      <article>
        <h1>My UX Skills</h1>
        <section>
          {/* <img src="" alt="" /> */}
          <h3>User research</h3>
          <p></p>
        </section>
        <section>
          {/* <img src="" alt="" /> */}
          <h3>User Interface Design</h3>
          <p></p>
        </section>
        <section>
          {/* <img src="" alt="" /> */}
          <h3>Web Development</h3>
          <p></p>
        </section>
      </article>
      <article>
        <h1>Contact</h1>
        <ul className="contact-links">
          <li className="contact-li">
            <a className="contact-link" href="mailto:kaybmurray@gmail.com">
              <FontAwesomeIcon className="contact-icon" icon={faSquareEnvelope} />
              email
            </a>
          </li>
          <li className="contact-li">
            <a className="contact-link" href="https://www.linkedin.com/in/theykay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
              theykay
            </a>
          </li>
          <li className="contact-li">
            <a className="contact-link" href="https://github.com/theykay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="contact-icon" icon={faGithubSquare} />
              theykay
            </a>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default About;