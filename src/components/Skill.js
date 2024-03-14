import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { BsBootstrapFill } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";


function Skill() {
  return (
    <div id='skill-section'>
    <div className='container'>
      <h1 className='text-center mb-4'>My Skills</h1>
      <div className='row'>
        <div className='col-3 box'>
            <div className='icon-image'> <FaReact /></div>
            <h3>React Js</h3>
            <p>JavaScript library for building interactive user interfaces efficiently and effectively.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <TbBrandJavascript /></div>
            <h3>JavaScript</h3>
            <p>Versatile scripting language powering dynamic web content and applications worldwide.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <IoLogoCss3 /></div>
            <h3>CSS</h3>
            <p> Design language for web presentation, enhancing aesthetics and layout.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <TiHtml5 /></div>
            <h3>HTML</h3>
            <p> foundation of web pages, defining structure.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <BsBootstrapFill /></div>
            <h3>Bootstrap</h3>
            <p>Front-end framework for responsive and mobile-first web development.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <FaSquareGithub /></div>
            <h3>Git-Hub</h3>
            <p>Leading platform for hosting, sharing, and collaborating on software projects.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <FaGitAlt /></div>
            <h3>Git</h3>
            <p>Distributed version control system for tracking changes in codebases.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <SiPostman /></div>
            <h3>Postman</h3>
            <p>API development tool facilitating testing, collaboration, and documentation workflows.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <SiRedux /></div>
            <h3>Redux</h3>
            <p>Predictable state container for React applications, facilitating centralized management.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <IoLogoVercel /></div>
            <h3>Vercel</h3>
            <p>Platform for deploying and hosting websites and applications seamlessly.</p>
        </div>
        <div className='col-3 box'>
        <div className='icon-image'> <SiNetlify /></div>
            <h3>Netlify</h3>
            <p>Platform for deploying and hosting websites and applications seamlessly.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skill