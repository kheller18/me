import React from 'react';
import Image from './Image';
import sportsbook from '../media/projects/sportsbook.png';
import stuffswap from '../media/projects/stuffswap.png';
import chefify from '../media/projects/chefify2.jpg';
import verdant from '../media/projects/verdant_earth.png';
import fitness from '../media/projects/fitness.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faHtml5, faMdb, faCss3Alt, faEthereum, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Projects.css';

const Projects = (props) => {
  return (
    <div className='projects-container'>
      <h1 className='projects-container-header'>Projects</h1>
      <div className='projects'>
        <div className='project' id='sportsbook'>
          <Image className='project-img' src={sportsbook} />
          <div className='project-details'>
            <h1 className='project-title'>SportsBook</h1>
            <a className='project-link' href='https://sbook-kman.herokuapp.com/' target='_blank' rel='noopener noreferrer' aria-label='SportsBook'>https://sbook-kman.herokuapp.com/</a>
            <p className='project-description'>A React.js sports betting website where users can place bets and track their earnings.</p>
            <h2 className='project-subtitle'>Built Using</h2>
            <div className='project-technologies'>
              <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' aria-label='React.js'>
                <FontAwesomeIcon className='project-technology' icon={faReact} />
              </a>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className='project-technology' icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className='project-technology' icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className='project-technology' icon={faCss3Alt} />
              </a>
              <a href='https://www.mongodb.com/' target='_blank' rel='noopener noreferrer' aria-label='MongoDB'>
                <FontAwesomeIcon className='project-technology' icon={faMdb} />
              </a>
              <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer' aria-label='Node.js'>
                <FontAwesomeIcon className='project-technology' icon={faNodeJs} />
              </a>
            </div>
            <h2 className='project-subtitle'>Repository</h2>
            <a href='https://github.com/kheller18/sportsbook-4' target='_blank' rel='noopener noreferrer' aria-label='SportsBook Repository'>
                <FontAwesomeIcon className='project-technology' icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='project' id='stuffswap'>
          <Image className='project-img' src={stuffswap} />
          <div className='project-details'>
            <h1 className='project-title'>StuffSwap</h1>
            <a className='project-link' href='https://stuff-swap.herokuapp.com/' target='_blank' rel='noopener noreferrer' aria-label='StuffSwap'>https://stuff-swap.herokuapp.com/</a>
            <p className='project-description'>An NFT marketplace to add collections, buy and sell NFT's.</p>
            <h2 className='project-subtitle'>Built Using</h2>
            <div className='project-technologies'>
              <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' aria-label='React.js'>
                <FontAwesomeIcon className='project-technology' icon={faReact} />
              </a>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className='project-technology' icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className='project-technology' icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className='project-technology' icon={faCss3Alt} />
              </a>
              <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer' aria-label='Node.js'>
                <FontAwesomeIcon className='project-technology' icon={faNodeJs} />
              </a>
              <a href='https://ethereum.org/en/' target='_blank' rel='noopener noreferrer' aria-label='Ethereum'>
                <FontAwesomeIcon className='project-technology' icon={faEthereum} />
              </a>
            </div>
            <h2 className='project-subtitle'>Repository</h2>
            <a href='https://github.com/kheller18/stuff-swap' target='_blank' rel='noopener noreferrer' aria-label='StuffSwap Repository'>
                <FontAwesomeIcon className='project-technology' icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='project' id='chefify'>
          <Image className='project-img' src={chefify} />
          <div className='project-details'>
            <h1 className='project-title'>Chefify</h1>
            <a className='project-link' href='https://kheller18.github.io/chefify/' target='_blank' rel='noopener noreferrer' aria-label='Chefify'>https://kheller18.github.io/chefify/</a>
            <p className='project-description'>An application that a user can search for recipes and customize their experience based on their interests.</p>
            <h2 className='project-subtitle'>Built Using</h2>
            <div className='project-technologies'>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className='project-technology' icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className='project-technology' icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className='project-technology' icon={faCss3Alt} />
              </a>
            </div>
            <h2 className='project-subtitle'>Repository</h2>
            <a href='https://github.com/kheller18/chefify' target='_blank' rel='noopener noreferrer' aria-label='Chefify Repository'>
                <FontAwesomeIcon className='project-technology' icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='project' id='Verdant'>
          <Image className='project-img' src={verdant} />
          <div className='project-details'>
            <h1 className='project-title'>Verdant Earth</h1>
            <a className='project-link' href='https://verdant-earth.herokuapp.com/' target='_blank' rel='noopener noreferrer' aria-label='Verdant Earth'>https://verdant-earth.herokuapp.com/</a>
            <p className='project-description'>An application that promotes renewable products and resources.</p>
            <h2 className='project-subtitle'>Built Using</h2>
            <div className='project-technologies'>
              <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' aria-label='React.js'>
                <FontAwesomeIcon className='project-technology' icon={faReact} />
              </a>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className='project-technology' icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className='project-technology' icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className='project-technology' icon={faCss3Alt} />
              </a>
              <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer' aria-label='Node.js'>
                <FontAwesomeIcon className='project-technology' icon={faNodeJs} />
              </a>
            </div>
            <h2 className='project-subtitle'>Repository</h2>
            <a href='https://github.com/kheller18/VerdantEarth' target='_blank' rel='noopener noreferrer' aria-label='Verdant Earth Repository'>
                <FontAwesomeIcon className='project-technology' icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='project' id='fitness'>
          <Image className='project-img' src={fitness} />
          <div className='project-details'>
            <h1 className='project-title'>Workout Tracker</h1>
            <a className='project-link' href='https://workout-tracker-kman.herokuapp.com/' target='_blank' rel='noopener noreferrer' aria-label='Workout Tracker'>https://workout-tracker-kman.herokuapp.com/</a>
            <p className='project-description'>An application for users to enter their workouts and track their progress.</p>
            <h2 className='project-subtitle'>Built Using</h2>
            <div className='project-technologies'>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className='project-technology' icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className='project-technology' icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className='project-technology' icon={faCss3Alt} />
              </a>
              <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer' aria-label='Node.js'>
                <FontAwesomeIcon className='project-technology' icon={faNodeJs} />
              </a>
            </div>
            <h2 className='project-subtitle'>Repository</h2>
            <a href='https://github.com/kheller18/workout-tracker' target='_blank' rel='noopener noreferrer' aria-label='Workout Tracker Repository'>
                <FontAwesomeIcon className='project-technology' icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
