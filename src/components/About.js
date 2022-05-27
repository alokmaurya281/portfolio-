import React from 'react';
import aboutimage from "../images/aboutus.gif";
import htmlicon from "../images/icons/html.png";
import cssicon from "../images/icons/css.png";
import jsicon from "../images/icons/js.png";
import reacticon from "../images/icons/react.png";
import pythonicon from "../images/icons/python.jpg";
import djangoicon from "../images/icons/django.png";
import phpicon from "../images/icons/php.png";


const About = () => {
  return ( 
    <section className="about-main">
                <div className="about">
                        <h3 className="about-title">What I Do</h3>
                        <p className="about-text">
                        FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                        </p>
                </div>
                <div className="tech-about">
                    <img className="about-full-image"src={aboutimage} alt=""/>
                    <div className="about-new">
                        <p className="tech-title">Full Stack Development</p>
                        <div className="about-images-icons">
                                <img className="about-icon-image" src={htmlicon} alt="" />
                                <img className="about-icon-image"src={cssicon} alt="" />
                                <img className="about-icon-image"src={jsicon} alt="" />
                                <img className="about-icon-image"src={reacticon} alt="" />
                                <img className="about-icon-image"src={pythonicon}alt="" />
                                <img className="about-icon-image"src={djangoicon} alt="" />
                                <img className="about-icon-image"src={phpicon} alt="" />
                        </div>
                            <div className="about-items">
                                        <span className="about-item-text">
                                    <span className="span1">⚡</span> Building responsive Single-Page-Apps (SPA) & PWA in React.js</span>
                                    
                                        <span className="about-item-text">
                                        <span className="span1">⚡</span> Building responsive static websites using Bootstrap,material UI
                                    </span>
                                    <span className="about-item-text">
                                    <span className="span1">⚡</span> Building RESTful APIs in Django & Django REST Framework
                                    </span>
                            </div>
                        </div>
                    </div>
    </section>
  )
}

export default About;