import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // Importing our custom Ivy League styled CSS
import SocialMediaBar from './SocialMediaBar';

const WelcomePage = () => {
  return (
    <div className="welcome">
      <h1>Hey,</h1>
      <p>I'm Emmanuel Wilford, a rising senior at Yale University where I study Computer Science and Economics. I've had the privilege of interning as a Software Engineer in several industries, where I've tackled fascinating projects,
         from creating innovative tools for automotive testing to developing chatbots for health education. Enjoy exploring my website to learn more about my journey and the projects I've had the pleasure of working on.</p>
        <SocialMediaBar />
    </div>

  );
};

export default WelcomePage;
