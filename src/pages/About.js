import React from "react";

const About = () => {
  return (
    <section id="apropos" className="bg-info text-light text-center p-4">
      <div className="container">
        <h2 className="text-uppercase mb-4">À propos</h2>
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src="/img/jane-doe.png"
              alt="Jane Doe"
              className="img-fluid rounded-circle mb-3"
            />
          </div>
          <div className="col-md-8">
            <p>
              Jane Doe est une développeuse full-stack passionnée, avec une
              expertise en React, Node.js et bien plus.
            </p>
            <div className="mb-3">
              <h5>Développement Web</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h5>Design</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
