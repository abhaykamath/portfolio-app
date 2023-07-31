import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="contact">
        <div>
          <i className="fa-solid fa-envelope"></i>
          <div>abhaykamath2299@gmail.com</div>
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <div>+91-8921592612</div>
        </div>
        <div>
          <i className="fa-brands fa-github"></i>
          <div>
            <a>https://github.com/abhaykamath</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
