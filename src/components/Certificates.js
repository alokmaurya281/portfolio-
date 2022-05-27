import React from 'react'

const Certificates = () => {
  return (
    <section className="education certificates">
  <div className="certificate-container">
  <div className="head">
      <img  className="edu_image"src="icons/certificates.jpeg" alt=""/>
      <h1 className="text_head">Certificates</h1>
  </div>
  <div className="education_card certificate_box">
  <div className="card">
      <h3 className="card_head">Python Fundamentals</h3>

      <p className="card-text">Udemy</p>
      <p className="card-text"> May 2021</p>
      <button className="cert-btn"><a href="python-udemy.pdf" className="nav-link">See Certificate </a></button>

  </div>
  <div className="card">
      <h3 className="card_head">React JS</h3>

      <p className="card-text">Coursera</p>
      <p className="card-text">May 2022</p>
      <button className="cert-btn"><a href="reactjs-coursera.pdf" className="nav-link">See Certificate </a></button>

  </div>
  <div className="card">
      <h3 className="card_head">Digital Marketing</h3>

      <p className="card-text">Google</p>
      <p className="card-text">May 2021</p>
      <button className="cert-btn"><a href="digital-marketing-google.pdf" className="nav-link">See Certificate </a></button>

  </div>
 
  </div>
</div>

</section>
  )
}

export default Certificates