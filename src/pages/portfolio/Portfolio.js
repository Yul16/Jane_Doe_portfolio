import React from "react";
import ProjectCard from "./ProjectCard";
import "./Portfolio.scss";

const projects = [
  {
    id: 1,
    title: "Fresh food",
    description: "Réalisation d'un site avec commande en ligne.",
    image: "/img/portfolio/freshfood.jpg",
    tech: "Site réalisé avec PHP et MySQL",
  },
  {
    id: 2,
    title: "Restaurant Akira",
    description: "Réalisation d'un site vitrine.",
    image: "/img/portfolio/akira.jpg",
    tech: "Site réalisé avec WordPress",
  },
  {
    id: 3,
    title: "Espace bien-être",
    description:
      "Réalisation d'un site vitrine pour un praticien de bien-être.",
    image: "/img/portfolio/bienetre.jpg",
    tech: "Site réalisé en HTML/CSS",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* Bannière */}
      <div className="portfolio-banner">
        <img src="/img/banniere.jpg" alt="Bannière" className="img-fluid" />
      </div>

      <div className="container text-center">
        <h2 className="text-uppercase mb-4">Portfolio</h2>
        <p className="mb-2">Voici quelques-unes de mes réalisations.</p>
        {/* Ligne bleue sous le texte */}
        <div className="blue-line"></div>

        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 col-sm-6 mb-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
