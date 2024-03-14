import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function Resume() {
  return (
    <div className='container'>
        <h1 className='text-center mt-4'>Resume</h1>
        <div className='row'>
          <div className='col-6 resume-about'>
            <h2 className='about-heading'>Profile</h2>
            <p className='about-sec'>Dedicated and passionate Frontend Developer with over two years of professional 
              experience in creating immersive and user-friendly web experiences. Proficient in a 
              variety of frontend technologies, including HTML5, CSS3, JavaScript, and popular frameworks such as 
              React.js. Strong design sensibilities coupled with a deep understanding of web development principles, 
              enabling the creation of visually stunning and highly functional websites and applications. Committed 
              to staying updated with the latest trends and technologies in the ever-evolving field of frontend 
              development.</p>
          </div>
          <div className='col-6 skills'>
            <h2 className='skill-heading'>Skills</h2>
            <ul>
              <li> <span><FaArrowRight /></span>Languages: HTML5, CSS3, JavaScript</li>
              <li><span><FaArrowRight /></span>Frameworks/Libraries: React.js</li>
              <li><span><FaArrowRight /></span>Responsive Design</li>
              <li><span><FaArrowRight /></span>UI/UX Design Principles</li>
              <li><span><FaArrowRight /></span>Version Control Systems: Git</li>
              <li><span><FaArrowRight /></span>Frontend Build Tools: Webpack, Gulp</li>
              <li><span><FaArrowRight /></span>Familiarity with RESTful APIs</li>
              <li><span><FaArrowRight /></span>Proficient in Adobe Photoshop, Sketch</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <h2 className='edu-head'>Education</h2>
          <div className='col-2 edu-sec'>
              <ul className='edu-year'>
                <li>2018 - 2021</li>
                <li>2017 - 2018</li>
                <li>2015 - 2016</li>
              </ul>
          </div>
          <div className='col-4 edu-course'>
              <ul>
                <li>B.Sc in Computer Science</li>
                <li>Secondary School Leaving Certificate</li>
                <li>Higher Secondary Certificate</li>
              </ul>
          </div>
          <div className='col-3 edu-place'>
            <ul>
                <li>GTN Arts College</li>
                <li>MSP Hr.Sec.School</li>
                <li>MSP Hr.Sec.School</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Resume