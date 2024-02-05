import React from "react";

const Projects = () => {
  return (
    <>
      <div>
        <section className="projects" id="projects">
          <div className="max-width">
            <div>
              <div className="title_one ">Projects </div>
            </div>
            <br />
            <br />
            <br />

            <div className="carousel owl-carousel">
              <div className="card">
                <a
                  href="https://github.com/sakshi-suryawanshi/twitter-clone"
                  target="_blank"
                >
                  <div className="box">
                    <img src="assets/images/twitter clone.png" alt="" />
                    <div className="text">
                      <p>
                        Twitter
                        <br />
                        clone
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card">
                <a
                  href="https://github.com/sakshi-suryawanshi/MinglingMinds"
                  target="_blank"
                >
                  <div className="box">
                    <img src="assets/images/Mingling Minds.png" alt="" />
                    <div className="text">
                      Mingling <br /> Minds
                    </div>
                  </div>
                </a>
              </div>

              <div className="card">
                <a
                  href="https://github.com/sakshi-suryawanshi/projects/blob/main/SER_model.ipynb"
                  target="_blank"
                >
                  <div className="box">
                    <img src="assets/images/SER.jpg" alt="" />
                    <div className="text">
                      Speech Emotion <br /> Recognition
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="projects">
          <div className="max-width">
            <div className="carousel owl-carousel">
              <div className="card">
                <a
                  href="https://github.com/sakshi-suryawanshi/weather-app"
                  target="_blank"
                >
                  <div className="box">
                    <img src="assets/images/weather app.png" alt="" />
                    <div className="text">
                      Weather <br /> Webapp
                    </div>
                  </div>
                </a>
              </div>

              <div className="card">
                <a
                  href="https://github.com/shreyawattamwar/E-Commerce"
                  target="_blank"
                >
                  <div className="box">
                    <img src="assets/images/e-commerce.png" alt="" />
                    <div className="text">
                      E-commerce <br /> Website
                    </div>
                  </div>
                </a>
              </div>

              <div className="card">
                <a
                  href="https://github.com/sakshi-suryawanshi/Plant-Disease-Prediction.git"
                  target="_blank"
                >
                  <div className="box">
                    <img src="assets/images/Plant-disease.jpg" alt="" />
                    <div className="text">
                      Plant Disease <br /> Prediction
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
