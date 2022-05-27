import React from 'react'
import linkedinicon from "../images/icons/linkedin.svg";
import githubicon from "../images/icons/github.svg";
import twittericon from "../images/icons/twitter.svg";
import facebookicon from "../images/icons/facebook.svg";
import resume from "../documents/resume.pdf";
import heroimage from "../images/hero-image.gif";


const Hero = () => {
  return (
    <section className="hero-main">
      <div className="hero-section">
        <div className="hero-text">
          <h3>Hey! I'm Alok Maurya</h3>
          <p>
            I'm a full stack Developer , I used so many things like
            Django,ReactJS , MySQL , Python , PHP. And I've complete knowledge
            of Web Developer with the trending technologies. Here is my Resume.
          </p>

          <div className="social-links">
            <ul className="social-menu">
              <li className="social-menu-link">
                <a href="www.facebook.com"
                  ><img src={facebookicon} alt="" /></a
                >
              </li>
              <li className="social-menu-link">
                <a href="www.twitter.com"
                  ><img src={twittericon} alt="" /></a
                >
              </li>
              <li className="social-menu-link">
                <a href="www.github.com"
                  ><img src={githubicon} alt="" /></a
                >
              </li>
              <li className="social-menu-link">
                <a href="www.linkedin.com"
                  ><img src={linkedinicon} alt="" /></a
                >
              </li>
            </ul>
          </div>
          <button className="resume-btn">
            <a href={resume}>See Resume</a>
          </button>
        </div>
        <div className="hero-image">
          <img src={heroimage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero