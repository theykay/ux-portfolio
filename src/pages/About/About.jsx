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
    <div>
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
        <ul>
          <li>
            <a href="mailto:kaybmurray@gmail.com">
              <FontAwesomeIcon icon={faSquareEnvelope} />
            </a>
          </li>
          <li>
            <a href="https://github.com/theykay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theykay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default About;