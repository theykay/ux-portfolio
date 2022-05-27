import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faLaptopCode,
  faPeopleGroup,
  faPenRuler,
  faObjectGroup
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faSass,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import './Home.scss';

const Home = () => {
  // need to remove classes when clicking outside e.target
  const reveal = (e) => {
    e.target.nextSibling.classList.toggle('unfolded');
    e.target.classList.toggle('active-collapser');
    let indicator = e.target.nextSibling.classList[1];
    // collapse other lists
    let lists = document.getElementsByClassName('about-skills-list');
    for (let i = 0; i < lists.length; i++) {
      if (i === parseInt(indicator)) {
        continue;
      }
      lists[i].classList.remove('unfolded');
    }
    // unhighlight other collapsers
    let togglers = document.getElementsByClassName('collapser');
    for (let j = 0; j < togglers.length; j++) {
      if (j === parseInt(indicator)) {
        continue;
      }
      togglers[j].classList.remove('active-collapser');
    }
  }

  return (
    <div className="page-content">
      <h1 className="home-h1">ux + ui design</h1>
      <section className="home-section">
        <h2 className="home-h2">I'm Kay</h2>
        <article className="home-article">
          <section className="about-section">
            <h3>a little about me</h3>
            <p>I'm a maker with a background in traditional product design. I bring a multifaceted skillset to all of my projects, informed by years of experience making physical and digital products. Adept at working in a group or individually, comfortable with giving and receiving constructive criticism of work</p>
          </section>
          <section className="about-section">
            <h3>some of my skills</h3>
            <div className="about-section-div">
              <h4 className="collapser" onClick={reveal}><FontAwesomeIcon className="section-icon" icon={faObjectGroup} />Design Systems</h4>
              <ul className="about-skills-list 0">
                <li>VSCode</li>
                <li>Figma</li>
                <li>InVision</li>
                <li>Miro</li>
                <li>Adobe XD</li>
              </ul>
            </div>
            <div className="about-section-div">
              <h4 className="collapser" onClick={reveal}><FontAwesomeIcon className="section-icon" icon={faPenRuler} />Creative Tools</h4>
              <ul className="about-skills-list 1">
                <li>Illustrator</li>
                <li>InDesign</li>
              </ul>
            </div>
            <div className="about-section-div">
              <h4 className="collapser" onClick={reveal}><FontAwesomeIcon className="section-icon" icon={faCode} />Languages</h4>
              <ul className="about-skills-list 2">
                <li><FontAwesomeIcon className="list-icon" icon={faHtml5} />HTML5</li>
                <li><FontAwesomeIcon className="list-icon" icon={faCss3Alt} />CSS3</li>
                <li><FontAwesomeIcon className="list-icon" icon={faJsSquare} />JavaScript ES6</li>
                <li><FontAwesomeIcon className="list-icon" icon={faReact} />React.js</li>
                <li><FontAwesomeIcon className="list-icon" icon={faSass} />SCSS</li>
                <li><FontAwesomeIcon className="list-icon" icon={faNodeJs} />Node.js</li>
                <li><FontAwesomeIcon className="list-icon" icon={faLaptopCode} />C# <span>learning</span></li>
                <li><FontAwesomeIcon className="list-icon" icon={faLaptopCode} />TypeScript <span>learning</span></li>
              </ul>
            </div>
            <div className="about-section-div">
              <h4 className="collapser" onClick={reveal}><FontAwesomeIcon className="section-icon" icon={faPeopleGroup} />Project Management</h4>
              <ul className="about-skills-list 3">
                <li>Discord</li>
                <li>Slack</li>
                <li>Trello</li>
                <li>Teams</li>
              </ul>
            </div>
          </section>
        </article>
      </section>
      <section className="home-section">
        <h1>Work</h1>
      </section>
    </div>
  );
};

export default Home;