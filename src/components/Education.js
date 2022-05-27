import React from 'react'
import edu_image from "../images/icons/edu.jpeg";

const Education = () => {
  return (
    <section className="education">
    <div className="education-container">
    <div className="head">
        <img  className="edu_image"src={edu_image} alt=""/>
        <h1 className="text_head">Education</h1>
    </div>
    <div className="education_card">
    <div className="card">
        <h3 className="card_head">Bachelor of Technology</h3>
        <p className="card-text">Rama University Uttar Pradesh Kanpur</p>
        <p className="card-text text-1">August 2019 - August 2023</p>
        <p className="card-text">Participated in many activities</p>
        <li className="list">Cricket</li>
        <li className="list">Tech Tvents</li>
    </div>
        <div className="card">
            <h3 className="card_head">Intermediate</h3>
            <p className="card-text">G.I.C Fatehpur</p>
            <p className="card-text text-1">April 2017 - April 2019</p>
            <p className="card-text">Participated in many activities</p>
            <li className="list">Cricket</li>
            <li className="list">Tech Tvents</li>

        </div>
        <div className="card">
            <h3 className="card_head">High School</h3>
            <p className="card-text">Children Public Sr. Sec. School</p>
            <p className="card-text text-1">April 2015 - May 2017</p>
            <p className="card-text">Participated in many activities</p>
            <li className="list">Cricket</li>
            <li className="list">Tech Tvents</li>

        </div>
    </div>
  </div>

</section>
  )
}

export default Education