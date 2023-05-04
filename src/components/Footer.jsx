import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footerContainer'>
      <div className="boxContainer">
        <a href="">
        <div className="footBox">
        <div className="subTitleBox">WANT TO TALK?</div>
        <h3 className="footTitle"> Get In Touch!</h3>
        <div className="subTitleBox">JOB OPPORTUNITIES, DEVELOPMENT, DESIGN, I LOVE IT ALL</div>
      </div>
        </a>
      <a href="">    <div className="footBox">
  <h3 className="footTitle">Technologies</h3>
  <div className="subTitleBox">THESE ARE MANY OF THE TOOLS I USE DAY TO DAY.</div>
  <div className="techIcons">
    <i className="fab fa-html5"></i>
    <i className="fab fa-css3-alt"></i>
    <i className="fab fa-js-square"></i>
    <i className="fab fa-react"></i>
    <i className="fab fa-sass"></i>
    <i className="fab fa-npm"></i>
    <i className="fab fa-node-js"></i>
    <i className="fab fa-envira"></i>
    <i className="fab fa-wordpress"></i>
    <i className="fab fa-shopify"></i>
    <i className="fab fa-adobe"></i>
    <i className="fas fa-database"></i>
  </div>
</div></a>
  
      
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/mike-finnegan-manifest/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Fluva74" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://twitter.com/MikeFin54739502" target="_blank"><i className="fab fa-twitter"></i></a>
        
      </div>
      <p className="copy">&copy; 2023 Mike Finnegan</p>
    </div>
  )
}

export default Footer