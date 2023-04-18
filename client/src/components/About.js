import React from 'react';
import '../styles/About.css';

// component for about me
const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-container-header'>About</h1>
      <div className='about-details'>
        <p>Hi! I'm Keenan Heller. Thanks for visiting my site!</p>
        <p>I went to school at the University of Arizona and got my B.S in Mechanical Engineering. After graduation, I started my first job
          at Boeing as a Functional Test Manufacturing Engineer for the 777X-8 program, which was a developmental airplane at the time. 
          My manager noticed I had Python on my resume and ... I quickly found out my passion was in software development. 
        </p>
      </div>
    </div>
  );
};

export default About;
