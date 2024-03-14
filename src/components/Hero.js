import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div id='hero'>
    <div className='container'>
        <div className='row'>
            <div className='col-8 details '>
                <h3>Hello, It's me</h3>
                <h1>Mohamed Nowsath</h1>
                <h2>And I'm a <span> Front-end Developer</span></h2>
                <p>Experienced front-end developer proficient in React.js,
                   with a proven track record of delivering high-quality,
                   responsive web applications With two years of hands-on experience.</p>
                <ul>
                    <li> <a href='#'><FaLinkedin /></a></li>
                    <li> <a href='#'><FaFacebook /></a></li>
                    <li> <a href='#'><SiIndeed /></a></li>
                    <li> <a href='#'><BiLogoGmail /></a></li>
                </ul>
            </div>
            <div className='col-4 image-home '>
                <img src='image1.jpg' />
            </div>
        </div>

    </div>
    </div>
  )
}

export default Hero