import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // Importing our custom Ivy League styled CSS
import SocialMediaBar from './SocialMediaBar';
import selfphoto from './me.jpg'
import img1 from './img1.JPEG'
import img2 from './img2.jpg'
import img3 from './img3.jpeg'
import img5 from './img5.jpg'
import img6 from './img12.JPG'
import img7 from './img7.JPG'
import img8 from './img8.jpeg'
import img9 from './img9.jpeg'
import img10 from './img10.JPG'
import img11 from './me.jpg'
import img12 from './img6.jpg'
import img13 from './img13.jpg'
import img14 from './img11.JPG'

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="welcome">
        <h1>Hey,</h1>
        <p>I'm Emmanuel Wilford, a rising senior at Yale University where I study Computer Science and Economics. I've had the privilege of interning as a Software Engineer in several industries, where I've tackled fascinating projects,
          from creating innovative tools for automotive testing to developing chatbots for health education. Enjoy exploring my website to learn more about my journey and the projects I've had the pleasure of working on.</p>
        <SocialMediaBar />
      </div>
      <div className="photos">
        <div class="grid-wrapper">
          <div class="tall">
            <img src={img1} alt="" />
          </div>
          <div class="big">
            <img src={img11} alt="" />
          </div>
          <div class="">
            <img src={img2} alt="" />
          </div>
          <div class="tall">
            <img src={img9} alt="" />
          </div>
          <div class="">
            <img src={img3} alt="" />
          </div>
          <div class="">
            <img src={img5} alt="" />
          </div>
          <div class="">
            <img src={img6} alt="" />
          </div>
          <div class="">
            <img src={img7} alt="" />
          </div>
          <div class="big">
            <img src={img8} alt="" />
          </div>

          <div>
            <img src={img10} alt="" />
          </div>
          <div class="tall">
            <img src={img14} alt="" />
          </div>
          <div class="">
            <img src={img12} alt="" />
          </div>
          <div class="big">
            <img src={img13} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
