import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Contact() {
  return (
    <div id='contact-section'>
    <div className='container'>
        <div className='image'>
          <img src='contact.jpg' />
        </div>
        <div className='row'>
          <div className='phone col-3'>
            <div className='phone-icon' ><IoCall /></div>
            <h6>+91 7373931589</h6>
          </div>
          <div className='address col-4'>
            <div className='address-icon'> <FaLocationDot /> </div>
            <p>125/49,Nethaji Nagar, Tondiarpet,Chennai-600 081</p>
          </div>
          <div className='email col-3'>
            <div className='email-icon'> <IoMail /> </div>
            <p>nowsathniz143@gmail.com</p>
          </div>
        </div>
        <div className='contact-details'>
          <ul>
            <li><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' > <IoIosMail /> </a></li>
            <li><a href='#' > <FaLinkedin /> </a></li>
            <li><a href='#' > <FaGithub /> </a></li>
            <li><a href='#' > <FaFacebook /> </a></li>
            <li><a href='#' > <FaTwitter /> </a></li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Contact