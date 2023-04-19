import React from 'react';
import Image from './Image';
import burger from '../media/cooking/burger.jpeg';
import pizza from '../media/cooking/pizza_oven_cropped.png';
import iceCream from '../media/cooking/blueberry_icecream.jpeg';
import gondola from '../media/travel/gondola.jpeg';
import goats from '../media/travel/goats.jpeg';
import luzern from '../media/travel/luzern_me.jpeg';
import mariners from '../media/teams/mariners.png';
import seahawks from '../media/teams/seahawks.png';
import kraken from '../media/teams/kraken.png';
import sounders from '../media/teams/sounders.png';
import sonics from '../media/teams/sonics.png';
import gallows from '../media/music/gallows.jpeg';
import lady from '../media/music/lady_lady.jpeg';
import passion from '../media/music/passion_pain_demon_slayin.png';
import change from '../media/music/time_for_a_change.jpeg';
import vincent from '../media/music/vincent.jpeg';
import '../styles/About.css';

// component for about me
const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-container-header'>About Me</h1>
      <div className='about-details'>
        <p className='about-detail'>Hi! I'm Keenan Heller. Thanks for visiting my site!</p>
        <p className='about-detail'>
          I studied Mechanical Engineering at the University of Arizona. After graduation, I began my career at Boeing as a Functional Test Manufacturing Engineer for the 777X-8 program,
          a developmental airplane at the time. My manager was aware of my limited experience in Python and asked me to create a web app that would promote team visibility.  As I started working on the project assigned by my manager,
          I quickly realized that my true passion lies in software engineering. The process of coding, debugging, and creating software solutions was incredibly fulfilling and enjoyable for me.
          It ignited a sense of excitement and motivation that I hadn't felt before. I realized that software engineering is where I truly excel and where I want to focus my career moving forward.
          I'm grateful for the opportunity to work on the project and for my manager, as it helped me discover my true passion and direction in the field of technology.
        </p>
        <p className='about-detail'>
          Since this time, I’ve completed two bootcamp certificate programs from the University of Washington in Full Stack Web Development and FinTech.
          As the world of software engineering evolves rapidly, with new technologies, methodologies, and best practices emerging constantly, my unwavering desire to continually learn,
          improve and understand the “why” will be the key to my success. In this ever-changing landscape, staying stagnant is not an option. To thrive, I recognize the need to adapt, grow, and constantly
          upgrade my skills to stay ahead of the curve. I am committed to staying curious, embracing challenges, and seeking out opportunities for professional development. With a growth mindset and a proactive approach to learning,
          I am confident that I will excel in the dynamic field of software engineering and contribute to cutting-edge innovations that shape the future of technology. Keep up with my projects and see what I’m working on!
        </p>
        <p className='about-detail'>
          Outside of software development, you can find me in the kitchen, outside, around the world and following my favorite teams.
        </p>
        <p className='about-detail'>
          Cooking has evolved from a simple task to a form of artistic expression that is truly soothing for my soul. With each dish, I embark on a culinary journey, carefully selecting ingredients,
          experimenting with flavors and textures, and creating a symphony of colors and aromas. The kitchen has become my canvas, and cooking has become my art form. As I chop, sauté, and simmer, I am transported
          to a world of creativity and inspiration, where my imagination and senses come alive. The act of cooking has become a therapeutic ritual, allowing me to pour my heart and soul into each dish, and share my passion with others.
          From the precise plating to the first bite, the joy and satisfaction I derive from cooking is unparalleled, filling my heart with warmth and contentment.
          Cooking has truly become a masterpiece that brings me solace, nourishment, endless inspiration for my soul and a way to connect through traveling.
        </p>
        <p className='about-detail'>
          Through my experiences with traveling, I have been able to broaden my horizons and gain a deeper understanding of the world around me. Exploring new cultures, meeting diverse people, and
          immersing myself in different environments have opened my mind to new perspectives, enriched my life with unique experiences and fostered personal growth. Traveling has truly been a transformative journey that
          has expanded my horizons in ways I never imagined possible.
        </p>
        <p className='about-detail'>
          Check out some of my favorite content below and thanks again for visiting!
        </p>
      </div>
      <div className='about-details'>
        <h1 className='about-container-header'>Menu Items</h1>
        <div className='about-img-row'>
          <Image className='about-img' src={burger} />
          <Image className='about-img' src={iceCream} />
          <Image className='about-img' src={pizza} />
        </div>
        <h1 className='about-container-header'>Traveling</h1>
        <div className='about-img-row'>
          <Image className='about-img' src={gondola} />
          <Image className='about-img' src={goats} />
          <Image className='about-img' src={luzern} />
        </div>

        <h1 className='about-container-header'>Teams I Love</h1>
        <div className='about-img-row'>
          <Image className='about-img-team' src={mariners} />
          <Image className='about-img-team' src={seahawks} />
          <Image className='about-img-team' src={kraken} />
          <Image className='about-img-team' src={sounders} />
          <Image className='about-img-team' src={sonics} />
        </div>

        <h1 className='about-container-header'>Albums on Repeat</h1>
        <div className='about-img-row'>
          <Image className='about-img-team' src={gallows} />
          <Image className='about-img-team' src={lady} />
          <Image className='about-img-team' src={passion} />
          <Image className='about-img-team' src={change} />
          <Image className='about-img-team' src={vincent} />
        </div>

      </div>
    </div>
  );
};

export default About;
