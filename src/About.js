import React from "react";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div id="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 about">
          <h1>About</h1>
          <p>
            In addition to my expertise in React.js, I possess strong skills in
            HTML, CSS, and JavaScript, enabling me to develop dynamic and
            visually appealing interfaces. I am adept at utilizing various
            libraries and frameworks to optimize performance and enhance user
            experience. Committed to continuous learning, I actively engage in
            self-improvement and stay abreast of emerging technologies to
            deliver innovative solutions Furthermore, my experience extends to leveraging state management
            tools like Redux for efficient data handling and maintaining code
            integrity. I have a keen eye for detail, ensuring code quality
            through rigorous testing and debugging processes.
          </p>
          </div>
          <div className="col-5 image-about">
            <img src="image1.jpg" />
          </div>
          <div className="col-7 detail-about">
              <h3>Frontend Web Developer</h3>
              <p className="para">I have worked as a frontend Web Developer at Spire Systems Ltd</p>
              <div className="row">
                <div className="col-6 list-details">
                    <ul>
                      <li><span><FaArrowRight /><b>Birthday : </b> </span> 2 July 2000</li>
                      <li><span><FaArrowRight /><b> Phone :</b> </span> +91 7373931589</li>
                      <li><span><FaArrowRight /><b> City :</b>  </span> Dindigul, Tamilnadu ,India</li>
                      <li><span><FaArrowRight /><b> Gender : </b> </span> Male</li>
                    </ul>
                </div>
                <div className="col-6 list-details">
                    <ul>
                      <li><span><FaArrowRight /> <b>Age : </b> </span> 23 </li>
                      <li><span><FaArrowRight /><b> Degree : </b> </span> B.sc CS </li>
                      <li><span><FaArrowRight /><b> Email : </b> </span> nowsathniz143@gmail.com </li>
                      <li><span><FaArrowRight /><b> Nationality : </b> </span> Indian </li>
                    </ul>                                         
                </div>
                <p className="para1">I have completed B.Sc Computer Science at GTN Arts College at Dindigul. 
                  I am highly dedicated ,self-Confident and hardworking graduate with well-developed 
                  communication and organizational skills.I am seeking a position in an esteemed organization 
                  offering an opportunity for growth in the sofyware field.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
