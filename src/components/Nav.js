import React from 'react';
import { BsHouseDoorFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { BsFillHddRackFill } from "react-icons/bs";
import { BsFileEarmark } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link, Outlet } from 'react-router-dom';


function Nav() {

  const handleClick = (e) => {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    e.target.classList.toggle("bi-list");
    e.target.classList.toggle("bi-x");
  };

  return (
   <div>
    <i onClick={handleClick} className='bi bi-list mobile-nav-toggle d-lg-none'> <TiThMenu> </TiThMenu> </i>
    <header id='header' className='d-flex flex-column justify-content-center'>
      <nav id='navbar' className='navbar nav-menu'>
        <ul>
          <li>
            <Link to='/' className='nav-link scrollto active'>
            <i><BsHouseDoorFill /></i> <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to='/about' className='nav-link scrollto '>
            <i><FaUserTie /></i> <span>About</span>
            </Link>
          </li>

          <li>
            <Link to='/skill' className='nav-link scrollto '>
            <i><BsFillHddRackFill /></i> <span>Skills</span>
            </Link>
          </li>

          <li>
            <Link to='/resume' className='nav-link scrollto '>
            <i><BsFileEarmark /></i> <span>Resume</span>
            </Link>
          </li>

          <li>
            <Link to='/portfolio' className='nav-link scrollto '>
            <i><FaBook /></i> <span>Portfolio</span>
            </Link>
          </li>

          <li>
            <Link to='/contact' className='nav-link scrollto '>
            <i><IoMdContact /> </i><span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
   </div>
  )
}

export default Nav