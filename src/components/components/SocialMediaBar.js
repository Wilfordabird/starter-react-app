import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaBar.css';

const SocialMediaBar = () => {
  return (
    <div className="social-container">
      <a href="tel:203-343-4232" className="phone social">
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </a>
      <a href="mailto:ej.wilford@yale.edu" className="email social">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/emmanuel-wilford" target="_blank" rel="noopener noreferrer" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.github.com/wilfordabird" target="_blank" rel="noopener noreferrer" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaBar;
