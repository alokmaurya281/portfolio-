import React from 'react'
import linkedinicon from "../images/icons/linkedin.svg";
import githubicon from "../images/icons/github.svg";
import twittericon from "../images/icons/twitter.svg";
import facebookicon from "../images/icons/facebook.svg";
import locationicon from "../images/icons/geo-alt-fill.svg";
import profileimage from "../images/ALOK IMAGE.jpg"

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footermain">
  <div className="footer-text">
    <h2>Reach Out to me!</h2>
    <h4>
      DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
    </h4>
    <p>Full Stack Web Developer</p>
    <button className="cert-btn location-btn"><img src={locationicon} alt=""/> India</button>
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
  </div>
  <div className="image-profile">
  <img src={profileimage} alt=""/>
  </div>
</div>
</footer>
  )
}

export default Footer