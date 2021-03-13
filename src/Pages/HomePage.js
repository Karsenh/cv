import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Particles canvasClassName='HomePage' height='100vh' width='80vw' />
      <header className='hero'>
        <h1 className='hero-text'>
          Hi, 👋🏼 I'm
          <span> Karsen</span>
        </h1>
        <p className='h-sub-text'>
          <Typed
            className='typed-text'
            strings={[
              'Computer Science Major',
              'Full-Stack Web Dev',
              'Meme Lord.',
            ]}
            typeSpeed={80}
            backSpeed={60}
            loop={true}
          />
        </p>
        <div className='icons'>
          <Link className='icon-holder'>
            <FontAwesomeIcon icon={faFacebook} className='icon fb' />
          </Link>
          <Link className='icon-holder'>
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </Link>
          <Link className='icon-holder'>
            <FontAwesomeIcon icon={faLinkedin} className='icon lin' />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;