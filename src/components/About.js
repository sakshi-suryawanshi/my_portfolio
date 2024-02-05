import React from "react";
// import "../styles/About.css"
import "./Navbar";

const About = () => {
  return (
    <div>
      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About me</h2>
          <div class="about-content">
            <div class="column right">
              <p>
                I am Software Developer, I'll design and develop a attractive
                full-stack website which is user friendly and responsive.
              </p>
              <a
                href="https://bit.ly/sakshi_profile"
                rel="noreferrer"
                target="_blank"
              >
                Visit CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
