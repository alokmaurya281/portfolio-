import React from 'react';
import linkedinicon from "../images/icons/linkedin.svg";
import githubicon from "../images/icons/github.svg";
import twittericon from "../images/icons/twitter.svg";
import facebookicon from "../images/icons/facebook.svg";
import Headroom from "react-headroom"
// import Headroom from "headroom.js"
    // let header = document.querySelector('header');
    //   let headroom= new Headroom(header);
    // // let headroom= new Headroom(header,{tolerance:{down:5,up:25}});
    // headroom.init();
const toogle=()=>{
    const btn=document.getElementById("menu");
    btn.classList.toggle("active");

}

const Navbar = () => {
   
    return(
        <Headroom>
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
                    <a href="https://www.facebook.com/alok7071"
                        ><img src={facebookicon} alt="" /> Facebook </a >
                    </li>
                    <li className="nav-item">
                    <a href="https://www.twitter.com/its_alok__m"
                        ><img src={twittericon} alt="" />Twitter</a>
                    </li>
                    <li className="nav-item">
                    <a href="https://github.com/alokmaurya281/"
                        ><img src={githubicon} alt="" />Github</a>
                    </li>
                    <li className="nav-item">
                    <a href="https://www.linkedin.com/in/alok-maurya-1437481b3/"
                        ><img src={linkedinicon} alt="" />LinkedIn</a>
                    </li>
                </ul>
                </nav>
            </header>
            </Headroom>
            
           
    )
}
export default Navbar;