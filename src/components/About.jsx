
import React from 'react';
import '../styles/about.css';
import aboutImage from '../assets/about-image.jpg'; 

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>Hello! I am Rekha R, a Full Stack Web Developer.I have experience in Python, SQL, Java, React.js, etc. I am passionate about becoming a web developer.
          In my free time, I enjoy watching movies, watching cricket, listening to music, etc.</p>
        </div>
        <div className="about-image-container">
          <img src={aboutImage} alt="About Me" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
