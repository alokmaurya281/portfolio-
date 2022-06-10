import React from 'react';
import linkedinicon from "../images/icons/linkedin.svg";
import githubicon from "../images/icons/github.svg";
import twittericon from "../images/icons/twitter.svg";
import facebookicon from "../images/icons/facebook.svg";

const toogle=()=>{
    const btn=document.getElementById("menu");
    btn.classList.toggle("active");

}

const Navbar = () => {
   
    return(
        <header className="header headroom">
                <nav className="navbar headroom">
                <div className="navbar-brand">
                    <h1>Alok Maurya</h1>
                </div>
                <button href="#" onClick={toogle} id="tog" className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className="nav-menu" id="menu">
                    <li className="nav-item">
                    <a href="www.facebook.com"
                        ><img src={facebookicon} alt="" /> Facebook </a >
                    </li>
                    <li className="nav-item">
                    <a href="www.twitter.com"
                        ><img src={twittericon} alt="" />Twitter</a>
                    </li>
                    <li className="nav-item">
                    <a href="www.github.com"
                        ><img src={githubicon} alt="" />Github</a>
                    </li>
                    <li className="nav-item">
                    <a href="www.linkedin.com"
                        ><img src={linkedinicon} alt="" />LinkedIn</a>
                    </li>
                </ul>
                </nav>
            </header>
           
    )
}
export default Navbar;