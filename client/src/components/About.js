import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';
import burger from '../media/cooking/burger.jpeg';
import pizza from '../media/cooking/pizza_oven_cropped.png';
import ravioli from '../media/cooking/ravioli.png';
import iceCream from '../media/cooking/blueberry_icecream.jpeg';
import gondola from '../media/travel/gondola.jpeg';
import gondolaMe from '../media/travel/gondola_me.jpg';
// import mimes from '../media/travel/mimes.jpg';
import goats from '../media/travel/goats.jpeg';
import luzern from '../media/travel/luzern_me.jpeg';
import florence from '../media/travel/florence.jpeg';
import mariners from '../media/teams/mariners.png';
import seahawks from '../media/teams/seahawks.png';
import kraken from '../media/teams/kraken.png';
import sounders from '../media/teams/sounders.png';
import sonics from '../media/teams/sonics.png';
import storm from '../media/teams/storm.png';
import gallows from '../media/music/gallows.jpeg';
import lady from '../media/music/lady_lady.jpeg';
import passion from '../media/music/passion_pain_demon_slayin.png';
import change from '../media/music/time_for_a_change.jpeg';
import vincent from '../media/music/vincent.jpeg';
import vbnd from '../media/music/vbnd.jpeg';
import '../styles/About.css';

// component for about me
const About = () => {
  const navigate = useNavigate();

  return (
    <div className='about-container'>
      <h1 className='about-header'>About Me</h1>
      <div className='about-details'>
        <div className='about-details-floated'>
          <Image className='about-img-floated' src={gondolaMe} />
          <p className='about-detail-floated'>
            Hi, I'm Keenan. Thanks for visiting my site!
            I studied Mechanical Engineering at the University of Arizona. My career began at Boeing as a Functional Test Manufacturing Engineer for the 777X-8 program,
            a developmental airplane at the time. My manager was aware of my limited experience in Python and asked me to create an internal web app for team visibility.
            As I started working on the project, I quickly realized that my true passion lies in software engineering. The process of coding, debugging, and creating
            software solutions was incredibly fulfilling and enjoyable for me. It ignited a sense of excitement and motivation that I hadn't felt before. I realized that software engineering
            is where I truly excel and where I want to focus my career moving forward. I'm grateful for the opportunity to work on the project and for my manager, as it helped me discover my true
            passion and direction in the field of technology.
          </p>
        </div>
        <p className='about-detail'>
          Since this time, I’ve completed two bootcamp certificate programs through the University of Washington in Full Stack Web Development and FinTech.
          As the world of software engineering evolves rapidly, with new technologies, methodologies, and best practices emerging constantly, my unwavering desire to continually learn,
          improve and understand the “why” will be the key to my success. In this ever-changing landscape, staying stagnant is not an option. To thrive, I recognize the need to adapt, grow,
          and constantly upgrade my skills to stay ahead of the curve. I am committed to staying curious, embracing challenges, and seeking out opportunities for professional development.
          With a growth mindset and a proactive approach to learning, I am confident that I will excel in the dynamic field of software engineering and contribute to cutting-edge innovations
          that shape the future of technology. Keep up with my <span className='link' onClick={() => navigate('/projects')}>projects</span> and see what I’m working on!
        </p>
        <p className='about-detail'>
          Outside of software development, you can find me in the kitchen, outside, around the world and following my favorite teams.
          Cooking has evolved from a simple task to a form of artistic expression that is truly soothing for my soul. The kitchen has become my canvas, and cooking has become my art form. The act of cooking has become
          a therapeutic ritual, allowing me to pour my heart and soul into each dish, and share my passion with others. From the precise plating to the first bite, the joy and satisfaction I derive
          from cooking is unparalleled, filling my heart with warmth and contentment. Cooking has truly become a masterpiece that brings me solace, nourishment, endless inspiration for my soul and
          a way to connect through traveling.
        </p>
        <p className='about-detail'>
          Through my experiences with traveling, I have been able to broaden my horizons and gain a deeper understanding of the world around me. Exploring new cultures, meeting diverse people,
          andimmersing myself in different environments have opened my mind to new perspectives, enriched my life with unique experiences and fostered personal growth. Traveling has truly
          been a transformative journey that has expanded my horizons in ways I never imagined possible.
        </p>
        <p className='about-detail no-margin'>
          Want to learn more? Get in contact and send me an <a href={`mailto:team@keenanheller.com?subject=''}&body=''}`}><span className='link'>email</span></a>. Check out some of my favorite content below and thanks again for visiting!
        </p>
      </div>
      <div className='about-details'>
        <h2 className='about-subheader'>Menu Items</h2>
        <div className='about-img-row'>
          <Image className='about-img' src={burger} />
          <Image className='about-img' src={iceCream} />
          <Image className='about-img' src={pizza} />
          <Image className='about-img' src={ravioli} />
        </div>
      </div>
      <div className='about-details'>
        <h2 className='about-subheader'>On the Road</h2>
        <div className='about-img-row'>
          <Image className='about-img' src={gondola} />
          <Image className='about-img' src={goats} />
          <Image className='about-img' src={luzern} />
          <Image className='about-img' src={florence} />
        </div>
      </div>
      <div className='about-details'>
        <h2 className='about-subheader'>Albums on Repeat</h2>
        <div className='about-img-row'>
          <Image className='about-img-music' id='gallows' src={gallows} onClick={() => window.open('https://open.spotify.com/album/6xDWQZ20oAB26Aza1C0EbA', '_blank')} />
          <Image className='about-img-music' id='lady' src={lady} onClick={() => window.open('https://open.spotify.com/album/2wqG59dVVQlJaxoO7N0LJt', '_blank')} />
          <Image className='about-img-music' id='passion' src={passion} onClick={() => window.open('https://open.spotify.com/album/5bCk3kWAy2JbbTfHqzZCII', '_blank')} />
          <Image className='about-img-music' id='change' src={change} onClick={() => window.open('https://open.spotify.com/album/5NPQ3KFdwLrZKuOebTAIzb', '_blank')} />
          <Image className='about-img-music' id='vincent' src={vincent} onClick={() => window.open('https://open.spotify.com/album/5OUJEZppb5mHHwR5Uw0rzw', '_blank')} />
          <Image className='about-img-music' id='vbnd' src={vbnd} onClick={() => window.open('https://open.spotify.com/album/3rQaTiH5vbjKcI0KoL1olN', '_blank')} />
        </div>
      </div>
      <div className='about-details'>
        <h2 className='about-subheader'>My Teams</h2>
        <div className='about-img-row'>
          <Image className='about-img-team' id='mariners' src={mariners} onClick={() => window.open('https://www.mlb.com/mariners', '_blank')} />
          <Image className='about-img-team' id='seahawks' src={seahawks} onClick={() => window.open('https://www.seahawks.com/', '_blank')} />
          <Image className='about-img-team' id='kraken' src={kraken} onClick={() => window.open('https://www.nhl.com/kraken', '_blank')} />
          <Image className='about-img-team' id='sounders' src={sounders} onClick={() => window.open('https://www.soundersfc.com/', '_blank')} />
          <Image className='about-img-team' id='sonics' src={sonics} onClick={() => window.open('https://www.nba.com/sonics', '_blank')} />
          <Image className='about-img-team' id='storm' src={storm} onClick={() => window.open('https://storm.wnba.com/', '_blank')} />
        </div>
      </div>
    </div>
  );
};

export default About;
