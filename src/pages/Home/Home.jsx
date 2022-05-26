import React from 'react';
import './Home.scss';

const Home = () => {
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
            <h4>Design Systems</h4>
            <ul>
              <li>VSCode</li>
              <li>Figma</li>
              <li>InVision</li>
              <li>Miro</li>
              <li>Adobe XD</li>
            </ul>
            <h4>Creative Tools</h4>
            <ul>
              <li>Illustrator</li>
              <li>InDesign</li>
            </ul>
            <h4>Languages</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>React.js</li>
              <li>SCSS</li>
              <li>C# <span>learning</span></li>
              <li>TypeScript <span>learning</span></li>
            </ul>
            <h4>project management</h4>
            <ul>
              <li>Discord</li>
              <li>Slack</li>
              <li>Trello</li>
              <li>Teams</li>
            </ul>
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