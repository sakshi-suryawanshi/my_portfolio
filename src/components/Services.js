import React from "react";
// import "../styles/Services.css"
import "./Navbar";

const Services = () => {
  return (
    <>
      <section class="services" id="services">
        <div class="max-width">
          <h2 class="title">My services</h2>
          <div class="serv-content">
            <div class="card">
              <div class="box">
                <i class="fas fa-laptop-code"></i>
                <div class="text">
                  {" "}
                  Full-stack <br /> Website
                </div>
                <p>
                  From Front-end flair to Back-end magic, our website has it all
                  - Elegance, Efficiency, and Excellance
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-paint-brush"></i>
                <div class="text">
                  Design and <br /> Development
                </div>
                <p>
                  Clean, modern design that's eye-catching and optimized for
                  peformance
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-code"></i>
                <div class="text">
                  API <br /> Development
                </div>
                <p>
                  Crafting a symphony of endpoints where every request hits the
                  the right note.
                </p>
              </div>
            </div>
            {/* <div class="card">
              <div class="box">
                <i class="fas fa-code"></i>
                <div class="text">
                  Mobile-
                  <br />
                  Friendly
                </div>
                <p>
                  A responsive design makes your website accessible to all user.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
