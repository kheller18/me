import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faHtml5, faMdb, faCss3Alt, faEthereum, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../App';
import Image from './Image';
import '../styles/Projects.css';

const Projects = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className='projects-container'>
      <h1 className='projects-header'>Projects</h1>
      <div className='projects'>
        <div className='project' id='sportsbook'>
          <div className='project-img-container'>
            <Image className='project-img' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/sportsbook.png' onClick={() => window.open('https://www.playerschoicesportsbook.com', '_blank')} />
          </div>
          <div className='project-details'>
            <a className='project-link' href='https://www.playerschoicesportsbook.com' target='_blank' rel='noopener noreferrer' aria-label='SportsBook'>
              <h2 className={`project-title-${theme}`}>SportsBook<span className='project-icon'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></h2>
            </a>
            <div className='project-img-container-mobile'>
              <Image className='project-img-mobile' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/sportsbook.png' onClick={() => window.open('https://www.playerschoicesportsbook.com', '_blank')} />
            </div>
            <p className='project-description'>A React.js sports betting website where users can place bets and track their earnings.</p>
            <h3 className='project-subtitle'>Built Using</h3>
            <div className='project-technologies'>
              <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' aria-label='React.js'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faReact} />
              </a>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faCss3Alt} />
              </a>
              <a href='https://www.mongodb.com/' target='_blank' rel='noopener noreferrer' aria-label='MongoDB'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faMdb} />
              </a>
              <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer' aria-label='Node.js'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faNodeJs} />
              </a>
            </div>
            <h3 className='project-subtitle'>Repository</h3>
            <a href='https://github.com/kheller18/sportsbook-4' target='_blank' rel='noopener noreferrer' aria-label='SportsBook Repository'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='project' id='stuffswap'>
          <div className='project-img-container'>
            <Image className='project-img' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/stuffswap.png' onClick={() => window.open('https://stuff-swap.herokuapp.com/', '_blank')} />
          </div>
          <div className='project-details'>
            <a className='project-link' href='https://stuff-swap.herokuapp.com/' target='_blank' rel='noopener noreferrer' aria-label='StuffSwap'>
              <h2 className={`project-title-${theme}`}>StuffSwap<span className='project-icon'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></h2>
            </a>
            <div className='project-img-container-mobile'>
              <Image className='project-img-mobile' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/stuffswap.png' onClick={() => window.open('https://stuff-swap.herokuapp.com/', '_blank')} />
            </div>
            <p className='project-description'>An NFT marketplace to add collections, buy and sell NFT's.</p>
            <h3 className='project-subtitle'>Built Using</h3>
            <div className='project-technologies'>
              <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' aria-label='React.js'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faReact} />
              </a>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faCss3Alt} />
              </a>
              <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer' aria-label='Node.js'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faNodeJs} />
              </a>
              <a href='https://ethereum.org/en/' target='_blank' rel='noopener noreferrer' aria-label='Ethereum'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faEthereum} />
              </a>
            </div>
            <h3 className='project-subtitle'>Repository</h3>
            <a href='https://github.com/kheller18/stuff-swap' target='_blank' rel='noopener noreferrer' aria-label='StuffSwap Repository'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='project' id='chefify'>
          <div className='project-img-container'>
            <Image className='project-img' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/chefify2.jpg' onClick={() => window.open('https://kheller18.github.io/chefify/', '_blank')} />
          </div>
          <div className='project-details'>
            <a className='project-link' href='https://kheller18.github.io/chefify/' target='_blank' rel='noopener noreferrer' aria-label='Chefify'>
              <h2 className={`project-title-${theme}`}>Chefify<span className='project-icon'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></h2>
            </a>
            <div className='project-img-container-mobile'>
              <Image className='project-img-mobile' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/chefify2.jpg' onClick={() => window.open('https://kheller18.github.io/chefify/', '_blank')} />
            </div>
            <p className='project-description'>An application that a user can search for recipes and customize their experience based on their interests.</p>
            <h3 className='project-subtitle'>Built Using</h3>
            <div className='project-technologies'>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faCss3Alt} />
              </a>
            </div>
            <h3 className='project-subtitle'>Repository</h3>
            <a href='https://github.com/kheller18/chefify' target='_blank' rel='noopener noreferrer' aria-label='Chefify Repository'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='project' id='Verdant'>
          <div className='project-img-container'>
            <Image className='project-img' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/verdant_earth.png' onClick={() => window.open('https://verdant-earth.herokuapp.com/', '_blank')} />
          </div>
          <div className='project-details'>
            <a className='project-link' href='https://verdant-earth.herokuapp.com/' target='_blank' rel='noopener noreferrer' aria-label='Verdant Earth'>
              <h2 className={`project-title-${theme}`}>Verdant Earth<span className='project-icon'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></h2>
            </a>
            <div className='project-img-container-mobile'>
              <Image className='project-img-mobile' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/verdant_earth.png' onClick={() => window.open('https://verdant-earth.herokuapp.com/', '_blank')} />
            </div>
            <p className='project-description'>An application that promotes renewable products and resources.</p>
            <h3 className='project-subtitle'>Built Using</h3>
            <div className='project-technologies'>
              <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' aria-label='React.js'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faReact} />
              </a>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faCss3Alt} />
              </a>
              <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer' aria-label='Node.js'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faNodeJs} />
              </a>
            </div>
            <h3 className='project-subtitle'>Repository</h3>
            <a href='https://github.com/kheller18/VerdantEarth' target='_blank' rel='noopener noreferrer' aria-label='Verdant Earth Repository'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faGithub} />
            </a>
          </div>
        </div>
        <div className='project' id='fitness'>
          <div className='project-img-container'>
            <Image className='project-img' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/fitness.png' onClick={() => window.open('https://workout-tracker-kman.herokuapp.com/', '_blank')} />
          </div>
          <div className='project-details'>
            <a className='project-link' href='https://workout-tracker-kman.herokuapp.com/' target='_blank' rel='noopener noreferrer' aria-label='Workout Tracker'>
              <h2 className={`project-title-${theme}`}>Workout Tracker<span className='project-icon'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></h2>
            </a>
            <div className='project-img-container-mobile'>
              <Image className='project-img-mobile' src='https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/fitness.png' onClick={() => window.open('https://workout-tracker-kman.herokuapp.com/', '_blank')} />
            </div>
            <p className='project-description'>An application for users to enter their workouts and track their progress.</p>
            <h3 className='project-subtitle'>Built Using</h3>
            <div className='project-technologies'>
              <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer' aria-label='JavaScript'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faJs} />
              </a>
              <a href='https://html.com/' target='_blank' rel='noopener noreferrer' aria-label='HTML5'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faHtml5} />
              </a>
              <a href='https://www.css3.com/' target='_blank' rel='noopener noreferrer' aria-label='CSS3'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faCss3Alt} />
              </a>
              <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer' aria-label='Node.js'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faNodeJs} />
              </a>
            </div>
            <h3 className='project-subtitle'>Repository</h3>
            <a href='https://github.com/kheller18/workout-tracker' target='_blank' rel='noopener noreferrer' aria-label='Workout Tracker Repository'>
                <FontAwesomeIcon className={`project-technology-${theme}`} icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
