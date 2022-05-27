import React from 'react'

const Projects = () => {
  return (
    <section className="education projects">
  <div className="project-container">
  <div className="head">
      <img  className="edu_image"src="icons/certificates.jpeg" alt=""/>
      <h1 className="text_head">Projects</h1>
  </div>
  <div className="education_card certificate_box">
  <div className="card">
      <h3 className="card_head">LostFound</h3>

      <p className="card-text">Website</p>
      <p className="card-text"> This project is done in PHP backend and using bootstrap.</p>
      <button className="cert-btn"><a href="http://lostfound.epizy.com" className="nav-link">Click To see </a></button>

  </div>
  <div className="card">
      <h3 className="card_head">MLM Website</h3>

      <p className="card-text">Website</p>
      <p className="card-text">all are working features that should need in mlm</p>
      <button className="cert-btn"><a href="http://abc99.ml" className="nav-link">See Certificate </a></button>

  </div>
  <div className="card">
      <h3 className="card_head">E-Learning platform</h3>

      <p className="card-text">Web, Android , IOS</p>
      <p className="card-text">Currently I'm Working On this Its basically a online learning platform </p>
      <button className="cert-btn"><a href="http://worldsqna.com" className="nav-link">Not Completed </a></button>

  </div>
 
  </div>
</div>

</section>
  )
}

export default Projects