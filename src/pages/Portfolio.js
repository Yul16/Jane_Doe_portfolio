import React from "react";

const Portfolio = () => {
  const projects = [1, 2, 3, 4, 5, 6]; // Identifiants des projets

  return (
    <section id="portfolio" className="p-4 text-center">
      <div className="container">
        <h2 className="text-uppercase mb-4">Portfolio</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project} className="col-md-4">
              <div className="card">
                <img
                  src={`/img/portfolio/projet${project}.png`}
                  className="card-img-top"
                  alt={`Projet ${project}`}
                />
                <div className="card-body">
                  <h5 className="card-title">Projet {project}</h5>
                  <p className="card-text">Description du projet {project}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
