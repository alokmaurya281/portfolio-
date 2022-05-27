import React from 'react';
import cloudimage from "../images/cloud_computing.gif"
import github1icon from "../images/icons/github_1.png";
import githubactionicon from "../images/icons/github_action.png";
import mysqlicon from "../images/icons/mysql_1.png";
import apacheicon from "../images/icons/apache.png";
import awsicon from "../images/icons/aws.png";

const Cloud = () => {
  return (
    <section className="cloud">

      <div className="tech-about">
          <img className="about-full-image cloud-image"src={cloudimage} alt=""/>
          <div className="about-new">
          <p className="tech-title">Cloud Based Technology</p>
              <div className="about-images-icons">
                      <img className="about-icon-image" src={github1icon} alt="" />
                      <img className="about-icon-image"src={githubactionicon} alt="" />
                      <img className="about-icon-image"src={mysqlicon} alt="" />
                      <img className="about-icon-image"src={apacheicon} alt="" />
                      <img className="about-icon-image"src={awsicon} alt="" />
              </div>
                  <div className="about-items">
                              <span className="about-item-text">
                          ⚡ Experience of working on multiple cloud platforms</span>
                          
                              <span className="about-item-text">
                          ⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases
                          </span>
                          <span className="about-item-text">
                          ⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions
                          </span>
                  </div>
                  </div>
      </div>
  </section>
  )
}

export default Cloud